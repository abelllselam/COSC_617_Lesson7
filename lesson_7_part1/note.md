**Cheerio & Node Projects**

# Cheerio

- It is a nifty Node package that allows developers to scrape front-end web pages.
  - use - npm install cheerio
  - use - var cheerio = require('cheerio')

# How does Cheerio works:

- Cheerio will allow a developer to iterate through HTML elements using DOM (Document Object Model). DOM is created by the browser when it loads an HTML page. Is is just a way of representing every HTML element like div, h1, p as an object. This objects are arranged like a tree structure (parent -> child -> sibling). JavaScript uses DOM methods like:

  - document.getElementById("myDiv")
  - element.innerHTML = "Hello"
  - element.style.color = "red"

- So developers can access specific HTML elements on a page or even loop through elements.

# Building a Simple Web Scraper:

- The cheerio module
- The request module
  - request is important to perform a GET call on the webpage. The GET will pull the raw HTML. So that it can be stored in a variable for cheerio to be able to search through it.
-
