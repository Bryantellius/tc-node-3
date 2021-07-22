#! /usr/bin/env node

import { createServer } from 'http'
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

// stolen from https://stackoverflow.com/a/64383997/713735
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080

createServer(function (request, response) {
  const chunks = []
  let {method, url} = request

  console.log({method, url})

  response
    .on('error', err=>{
      basicHeader(response, 500, 'text/plain')
      responseWrite(response, `An error occured in the response:\n\n${err}`)
    })
  
  request
    .on('error', err=>{
      basicHeader(response, 500, 'text/plain')
      responseWrite(response, `An error occured in the request:\n\n${err}`)
    })

  switch(url) {
    case '/':
      sendResponse(response, htmlDocument('Hello world', 'Welcome to the default URL!'))
      break
    case '/echo':
      request
        .on('data', chunk=>chunks.push(chunk))
        .on('end', ()=>{
          const body = Buffer.concat(chunks).toString()
          sendResponse(response, htmlDocument('Echo', JSON.stringify({
            method,
            url,
            body
          })))
        })
      break
    case '/antipode':
      request
        .on('data', chunk=>chunks.push(chunk))
        .on('end', ()=>{
          let data = JSON.parse(Buffer.concat(chunks).toString())
          let {lat, long} = data
          console.log({lat, long})
          if(lat === undefined) return jsonError(response, 'lat must be given and be a valid latitude')
          if(long === undefined) return jsonError(response, 'long must be given and be a valid longitude')
          if(method != 'POST') return jsonError(response, 'only post requests allowed')
          lat *= -1
          let multiplier = long < 1 ? 1 : -1
          long = (180 - Math.abs(long)) * multiplier
          basicHeader(response, 200, 'application/json')
          responseWrite(response, JSON.stringify({type: 'success', lat, long}))
        })
      break
    case '/about':
      const info = {
        name: 'Scott',
        location: 'Hoover',
        website: 'https://www.scottseverance.us'
      }
      basicHeader(response, 200, 'application/json')
      responseWrite(response, JSON.stringify(info))
      break
    case '/file/write':
      request
        .on('data', chunk=>chunks.push(chunk))
        .on('end', () => {
          let data = JSON.parse(Buffer.concat(chunks).toString())
          let {name, contents} = data
          if(method != 'PUT') return jsonError(response, 'only put requests allowed')
          if(name === undefined || contents == undefined) return jsonError(response, 'name and contents must be given as JSON')
          // fs.readdir(path.join(__dirname, 'uploads'), (err, files) =>{
          //   if(err) return errorCallback(response, err)
          //   basicHeader(response, 200)
          //   responseWrite(response, htmlDocument('Files', files))
          // })
          fs.writeFile(path.join(__dirname, 'uploads', name), contents, err=>errorCallback(response, err))
        })
      break
      case '/file/append':
        request
          .on('data', chunk=>chunks.push(chunk))
          .on('end', () => {
            let data = JSON.parse(Buffer.concat(chunks).toString())
            let {name, contents} = data
            if(method != 'PUT') return jsonError(response, 'only put requests allowed')
            if(name === undefined || contents == undefined) return jsonError(response, 'name and contents must be given as JSON')
            fs.appendFile(path.join(__dirname, 'uploads', name), contents, err=>errorCallback(response, err))
          })
        break
      case '/file/cat':
        request
          .on('data', chunk=>chunks.push(chunk))
          .on('end', () => {
            let data = JSON.parse(Buffer.concat(chunks).toString())
            let {name} = data
            if(method != 'GET') return jsonError(response, 'only get requests allowed')
            if(name === undefined) return jsonError(response, 'name must be given as JSON')
            fs.readFile(path.join(__dirname, 'uploads', name), (err, data)=>{
              if(err) errorCallback(response, err)
              sendResponse(response, JSON.stringify({
                type: 'success',
                message: data.toString()
              }), 'application/json')
            })
          })
        break
      case '/file/mv':
        request
          .on('data', chunk=>chunks.push(chunk))
          .on('end', () => {
            let data = JSON.parse(Buffer.concat(chunks).toString())
            let {oldName, newName} = data
            if(method != 'POST') return jsonError(response, 'only post requests allowed')
            if(oldName === undefined || newName === undefined) return jsonError(response, 'oldName and newName must be given as JSON')
            fs.rename(path.join(__dirname, 'uploads', oldName), path.join(__dirname, 'uploads', newName), err=>errorCallback(response, err))
          })
        break
      case '/file/rm':
        request
          .on('data', chunk=>chunks.push(chunk))
          .on('end', () => {
            let data = JSON.parse(Buffer.concat(chunks).toString())
            let {name} = data
            if(method != 'POST') return jsonError(response, 'only post requests allowed')
            if(name === undefined) return jsonError(response, 'name must be given as JSON')
            fs.unlink(path.join(__dirname, 'uploads', name), err=>errorCallback(response, err))
          })
        break
    default:
      basicHeader(response, 404)
      responseWrite(response, htmlDocument('404 Not Found', '404 Not Found'))
  }
}).listen(port, () => console.log(`Server listening on port ${port}...`))

function sendResponse(response, message, contentType='text/html') {
  basicHeader(response, 200, contentType)
  responseWrite(response, message)
}

function basicHeader(response, status, type='text/html') {
  response.writeHead(status, {'Content-Type': `${type}; charset=UTF-8`})
}

function htmlDocument(title, message) {
  return `<!DOCTYPE html><html><head><title>${title}</title></head><body><h1>Here's a message</h1><p>${message}</p></body></html>`
}

function jsonError(response, message) {
  basicHeader(response, 400, 'application/json')
  responseWrite(response, JSON.stringify({
    type: 'error',
    message
  }))
}

function responseWrite(response, message) {
  response.write(message)
  response.end()
}

function errorCallback(response, err) {
  if(err) {
    basicHeader(response, 500, 'application/json')
    responseWrite(response, JSON.stringify({
      type: 'error',
      message: err
    }))
  } else {
    basicHeader(response, 200, 'application/json')
    responseWrite(response, JSON.stringify({
      type: 'success',
      message: 'success'
    }))
  }
}
