import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByRole('link', { name: 'Services', exact: true }).click();

  const clientWorkLink = page.getByRole('link', {
    name: 'Explore Our Client Work',
    exact: true,
  });

  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page).toHaveURL(/\/services\/client-work\/?$/);
  await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
});
