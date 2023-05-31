const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.goto('https://www.bcv.org.ve/')
  const tasa = await page.evaluate(() => {
    const dolar = document.querySelector('#dolar div div strong').innerHTML
    return dolar.trim()
  })
  console.log(tasa);
  browser.close()
})()