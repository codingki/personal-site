import chrome from "chrome-aws-lambda";
import absoluteUrl from "next-absolute-url";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let browser = null;
  const { origin } = absoluteUrl(req);

  try {
    const title = req.query.title as string;
    const description = req.query.description as string;
    const path = req.query.path as string;
    const params = new URLSearchParams({ title, description, path });
    const url = `${origin}/image?${params}`;

    browser = await chrome.puppeteer.launch({
      args: [],
      defaultViewport: chrome.defaultViewport,
      headless: chrome.headless,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1024,
      height: 512,
    });

    await page.goto(url, {
      waitUntil: "load",
    });

    const screenshot = await page.screenshot({
      encoding: "binary",
    });

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=120");
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export default handler;
