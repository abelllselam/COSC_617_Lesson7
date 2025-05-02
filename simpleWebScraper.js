const https = require("https");
const cheerio = require("cheerio");

//URL to scrape
const url = "https://news.ycombinator.com";

https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res
    .on("end", () => {
      const $ = cheerio.load(data);

      $(".titleline a").each((i, element) => {
        const title = $(element).text();
        const link = $(element).attr("href");
        console.log(`${i + 1}.${title}`);
        console.log(`${link}`);
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
});
