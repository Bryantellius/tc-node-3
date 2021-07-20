import { createServer } from 'http'

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': "text/html"})
  res.write('<!DOCTYPE html><html><head><title>Hello world</title><body><h1>Hello world</h1><p>This is a test.</p></body></html>')
  res.end()
}).listen(8080, () => console.log('Server listening on port 8080...'))
