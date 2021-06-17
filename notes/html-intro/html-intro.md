# HTML Intro: Tags & Attributes

## Block vs. Inline Tags

- Block tags take up the entire line to themselves
  - ex: `<div>`, `<p>`, `<body>`, `<html>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<aside>`, `<h1> through <h6>`
- Inline tags only take up as much space as the content they contain
  - ex: `<span>`, `<em>`, `<strong>`, `<input>`, `<img>`, `<a>`, `<label>`

## Tag Structure

- All tags have an opening tag that resembles the following `<tagname>`
- Tags that contain content, i.e. text or more nested elements, will have a closing tag that resembles the following `</tagname>`
- Few tags do not contain text or nested elements, and are self-enclosed. `<img src="..." alt="...">` and `<input type="..." placeholder="..." name="..." id="...">` are two examples.

## Attributes

- Attributes are name/value pairs that add characteristics and behaviors to tags
- All attributes follow the pattern of `<tagname attributename="attributevalue">`, and are found **IN** the opening tag
- You can add as many attributes to a tag as necessary, ex: `<tagname attributename1="attributevalue1" attributename2="attributevalue2" attributename3="attributevalue3">`

## The Anatomy of an HTML Document

- All HTML documents must have a specific tag on line 1: `<!DOCTYPE html>`
- Then the only other parent tag is the `<html></html>` tag. All other tags are nested inside of the html tag
- Inside of the html tag, there are two _sibling_ tags: `<head>` and `<body>`

### The head tag

- All information in the head tag _describes_ the html document

### The body tag

- All information in the body tag is _displayed_ to the user