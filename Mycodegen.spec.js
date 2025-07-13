import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto ('https://demoblaze.com/')
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('vasu1990');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Fly2moon*');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Welcome vasu1990' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
}); 