import { test, expect } from '@playwright/test';
import formData from '../testdata/formdata.json';

test('submit form', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/form-validation');

  await page.locator('#validationCustom01').fill(formData.contactName);
  await page.locator('[name="contactnumber"]').fill(formData.contactNumber);
  await page.locator('[name="pickupdate"]').fill(formData.pickupDate);
  await page.locator('#validationCustom04').selectOption(formData.paymentMethod);
  await page.getByRole('button', { name: 'Register' }).click();
  
  await expect(page.locator('.alert.alert-info')).toBeVisible();
});

