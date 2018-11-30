describe('React in a box', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should display "Counter counts 0" text on page', async () => {
    await page.screenshot({ path: './screenshot1.png' });
    await expect(page).toMatch('Counter counts 0');
  });

  it('should display "Counter counts 1" when clicked', async () => {
    await page.waitForSelector('#counter');
    await page.click('#counter');
    await expect(page).toMatch('Counter counts 1');
    await page.screenshot({ path: './screenshot2.png' });
  });
});
