import puppeteer from "puppeteer";

const fetchThreadContent = async (threadUrls) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const tweetContents = [];

  try {
    for (const url of threadUrls) {
      await page.goto(url, { waitUntil: "networkidle2" });

      const threadAnalysis = await page.$$eval(
        "article div[lang]",
        (tweetElements) => {
          return tweetElements.map((tweetElement) => tweetElement.textContent);
        }
      );

      tweetContents.push(...threadAnalysis);
    }
    return tweetContents;
  } catch (error) {
    console.log(error);
  }

  browser.close();
};

export default fetchThreadContent;
