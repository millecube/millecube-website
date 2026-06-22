import puppeteer from "puppeteer";

const url = process.argv[2] || "http://localhost:3000";
const selector = process.argv[3] || "body";

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate((sel) => {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: "instant" });
}, selector);
await new Promise((r) => setTimeout(r, 900));
const el = await page.$(selector);
const fname = `screenshots/screenshot-section-${Date.now()}.png`;
await el.screenshot({ path: fname });
await browser.close();
console.log("Saved:", fname);
