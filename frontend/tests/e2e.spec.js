import { test, expect } from '@playwright/test';

// Basic smoke tests to ensure the app renders and routes are reachable

test('redirects unauthenticated users to Login and shows title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});

test('signup page is reachable', async ({ page }) => {
  await page.goto('/signup');
  await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
});
