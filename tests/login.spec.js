import { test, expect } from '@playwright/test';


test('successful login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  await page.locator('#username').fill(process.env.USERNAME);
  await page.locator('#password').fill(process.env.PASSWORD);
  await page.locator('#submit-login').click();

  await expect(page).toHaveURL(/secure/);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});


