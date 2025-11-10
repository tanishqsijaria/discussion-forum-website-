import { test, expect } from '@playwright/test';

// Full happy-path flow: signup -> redirected home -> create post -> add comment

test('signup, create post, and comment flow', async ({ page }) => {
  const ts = Date.now();
  const username = `e2e_${ts}`;
  const email = `e2e_${ts}@example.com`;
  const password = `P@ssw0rd!${ts}`;

  // Sign up
  await page.goto('/signup');
  await page.getByLabel('Username:').fill(username);
  await page.getByLabel('Email:').fill(email);
  await page.getByLabel('Password:').fill(password);
  await page.getByRole('button', { name: 'Sign Up' }).click();

  // Arrive at home (protected)
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole('heading', { name: 'Discussion Forum' })).toBeVisible();

  // Create a post
  const title = `Hello World ${ts}`;
  const content = `This is a test post at ${ts}`;
  await page.getByLabel('Title:').fill(title);
  await page.getByLabel('Content:').fill(content);
  await page.getByRole('button', { name: 'Create Post' }).click();

  // Post should appear
  await expect(page.getByRole('heading', { name: title, level: 3 })).toBeVisible();
  await expect(page.getByText(content)).toBeVisible();

  // Add a comment scoped to the created post card
  const comment = `Nice post ${ts}`;
  const postCard = page.locator('.post-card').filter({ has: page.getByRole('heading', { name: title, level: 3 }) });
  await expect(postCard).toBeVisible();
  await postCard.getByPlaceholder('Add a comment...').fill(comment);
  await postCard.getByRole('button', { name: 'Add Comment' }).click();

  // Comment should appear under that post
  await expect(postCard.getByText(comment)).toBeVisible();
});
