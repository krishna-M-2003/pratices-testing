import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

	test.beforeEach(async ({page}) => {
        await page.goto('https://practice.expandtesting.com/');
      });

test.describe('practiceTesting', () => {

  test('RedirectLink', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Redirect Link' })).toBeVisible();
    await page.getByRole('link', { name: 'Redirect Link' }).click();
    await expect(page.getByRole('link', { name: 'here' })).toBeVisible();
    await page.getByRole('link', { name: 'here' }).click();
    await expect(page.getByRole('link', { name: '200' })).toBeVisible();
    await page.getByRole('link', { name: '200' }).click();
    await page.getByRole('link', { name: 'here' }).click();
    await page.getByRole('link', { name: '301' }).click();
    await page.getByRole('link', { name: 'here' }).click();
    await page.getByRole('link', { name: '404' }).click();
    await page.getByRole('link', { name: 'here' }).click();
    await page.getByRole('link', { name: '500' }).click();
    await page.getByRole('link', { name: 'here' }).click();
  });

  test('Hover', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Hovers' }).click();
    await page.getByRole('img', { name: 'User Avatar' }).first().hover();
    await page.getByRole('link', { name: 'View profile' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome user1' })).toBeVisible();
    await page.goto('https://practice.expandtesting.com/hovers');
    await page.getByRole('img', { name: 'User Avatar' }).nth(1).first().hover();
    await page.getByRole('link', { name: 'View profile' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome user2' })).toBeVisible();
    await page.goto('https://practice.expandtesting.com/hovers');
    await page.getByRole('img', { name: 'User Avatar' }).nth(2).first().hover();
    await expect(page.getByRole('link', { name: 'View profile' })).toBeVisible();
    await page.getByRole('link', { name: 'View profile' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome user3' })).toBeVisible();
  });
});


