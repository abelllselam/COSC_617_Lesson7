const https = require("https");
const cheerio = require("cheerio");

const url = "https://www.imdb.com/chart/top/";

https.get(url, (res) => {
  let data = "";

  res.on("data", (content) => {
    data += content;
  });

  res.on("end", () => {
    const $ = cheerio.load(data);
    //console.log($);

    $(".sc-995e3276-0.eXDZXb").each((i, element) => {
      if (i < 5) {
        const title = $(element).find("h3").text().trim();
        //when .find looks for span it finds the span but .first() makes it return just with the first span element content and the .text() concatenates whatever is in that element and returns it.
        const year = $(element).find("span").first().text().trim();
        console.log(`${title} The Year: ${year}`);
      }
    });
  });
});
