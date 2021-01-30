import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer';
import absoluteUrl from 'next-absolute-url';
import qs from 'querystring';
const handler = async (req, res) => {
	let browser = null;
	const { origin } = absoluteUrl(req);
	const urlOrigin = `${origin}`;

	try {
		// Prod
		const title = req.query.title;
		const description = req.query.description;
		const path = req.query.path;
		const query = qs.stringify({ title, description, path });
		const url = `${urlOrigin}/image?${query}`;

		// Local
		// const url = `https://${req.headers.host}/image`;
		browser = await chrome.puppeteer.launch({
			// Local
			// args: [],
			// defaultViewport: chrome.defaultViewport,
			// executablePath: puppeteer.executablePath(),
			// headless: chrome.headless,
			// ignoreHTTPSErrors: true,

			// Prod
			args: chrome.args,
			defaultViewport: chrome.defaultViewport,
			executablePath: await chrome.executablePath,
			headless: chrome.headless,
			ignoreHTTPSErrors: chrome.headless,
		});
		const page = await browser.newPage();

		await page.setViewport({
			width: 1024,
			height: 512,
		});

		await page.goto(url, {
			waitUntil: 'load',
		});

		const screenshot = await page.screenshot({
			encoding: 'binary',
		});

		res.setHeader('content-type', 'image/png');
		res.setHeader('cache-control', 'public, max-age=120');
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
