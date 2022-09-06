const {username, password} = require("../users.js");
const {chromium} = require("playwright");

(async()  => {
 const browser = await chromium.launch();
 const page = await browser.newPage();
 await page.goto("https://netology.ru/?modal=sign_in");
browser.close;
})();