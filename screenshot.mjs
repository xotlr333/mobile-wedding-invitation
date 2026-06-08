import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(2000);

// 갤러리 섹션으로 이동
await page.evaluate(() => document.body.scrollTo({ top: 2030, behavior: 'instant' }));
await page.waitForTimeout(1000);

// 첫 번째 이미지 클릭
await page.locator('section').nth(3).locator('div > div').first().click();
await page.waitForTimeout(600);
await page.screenshot({ path: '/tmp/gallery-lightbox.png' });

// 다음 버튼 클릭
await page.getByRole('button').filter({ hasText: '' }).nth(2).click();
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/gallery-lightbox-next.png' });

await browser.close();
console.log('Done');
