describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should display "Counter counts 0" text on page', async () => {
    await expect(page).toMatch('Counter counts 0');
  });
});
