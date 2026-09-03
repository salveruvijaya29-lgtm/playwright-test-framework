import { test, expect } from '@playwright/test';

test('title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API');
});

test('url', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await expect(page).toHaveURL('https://practice.expandtesting.com/');
});

test('login form', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('#submit-login').click();

  await expect(page).toHaveURL(/secure/);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test ('demoblaze title',async ({page}) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

test ('demo url check',async ({page}) => {
    await page.goto('https://demoblaze.com/');
    await expect (page).toHaveURL('https://demoblaze.com/');
});
