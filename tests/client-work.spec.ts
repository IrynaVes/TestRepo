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

  await expect(
    page.getByRole('heading', { name: 'Client Work', exact: true })
  ).toBeVisible();
});
