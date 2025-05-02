//This is build into Node.js. It lets us make secure web requests to websites that use HTTPS
const https = require("https");
//This is an external library that was installed using (npm install cheerio). It lets us load and query HTML pages. Which is similar to how jQuery works.
const cheerio = require("cheerio");

//This is the website we wanted scrape which we are assigning it to url
//URL to scrape
const url = "https://news.ycombinator.com";

// This is a GET message to the website using the https node.js built in module. When the server responds Node.js gives us (res) short for response.
https.get(url, (res) => {
  //we create an empty string to collect the incoming data.
  let data = "";
  //(res) is a response object and what is called a readable stream in Node.js and streams in Node.js emit events(like- data, end, and error) and you can listen to those events using .on(). Which .on() is a built in event listener built-in method available on any event emitter in Node.js. .on() takes an eventName and a callback function. So in this case on(data, (chunk) => {}). So what we are saying is that when a chunk of data is received add it to "data".
  res.on("data", (chunk) => {
    data += chunk;
  });
  //what we are saying here is that when all chunks have been received and ther is not more data , do this: for res.on look at the above explanation. end is the eventName and an anonymous arrow function as the callback.
  res
    .on("end", () => {
      //This takes the full HTML string (now stored in data) and loads it into cheerio. Then it is saying give me a tool to search through the data. ($) is just a variable name. It is a function that you can use to select and manipulate elements from the HTML. It works like jQuery- which uses $ the same way.The variable can be named anything like (const select = cheerio.load(data)) but people use that out of tradition because it matches jQuery and keeps code short and readable.
      const $ = cheerio.load(data);
      //$() - this means search in the HTML. $(".titleline a") uses cheerio's $ to select all anchor (<a>) tags that are inside elements with class (titleline). Which matches the structure of the Hacker News. .each((i, element) => {....}) - this loops through every matching element. Where element is the actual DOM and i is the index starting from 0.
      $(".titleline a").each((i, element) => {
        //this gets the text between the <a> tags- the news story title.
        const title = $(element).text();
        //It gets the value of the href attribute - the URL of the news.
        const link = $(element).attr("href");

        //prints the index and title, then it prints the link
        console.log(`${i + 1}.${title}`);
        console.log(`${link}`);
      });
    }) //.on is still the listener from the res stream for the error. when something goes wrong this code will run.This is important because the program will not crash or hang if something goes wrong.With this you can gracefully handle issues by printing a helpful message.
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
});
