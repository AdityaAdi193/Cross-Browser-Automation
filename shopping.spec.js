const { test, expect } = require('../fixtures/testFixtures');

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('Sort products by price from low to high', async ({ page }) => {
  await page.getByTestId('product-sort-container')
    .selectOption('lohi');

  const prices = await page.locator('.inventory_item_price')
    .allTextContents();

  const numericPrices = prices.map(price =>
    Number(price.replace('$', ''))
  );

  expect(numericPrices).toEqual(
    [...numericPrices].sort((a, b) => a - b)
  );
});

test('Add product to cart and validate cart badge', async ({ page }) => {
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

  await expect(page.getByTestId('shopping-cart-badge'))
    .toHaveText('1');

  await page.getByTestId('shopping-cart-link').click();

  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();
});

test('Complete checkout successfully', async ({ page }) => {
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.getByTestId('shopping-cart-link').click();

  await page.getByTestId('checkout').click();

  await page.getByTestId('firstName').fill('Adilu');
  await page.getByTestId('lastName').fill('Tester');
  await page.getByTestId('postalCode').fill('560001');

  await page.getByTestId('continue').click();

  await expect(page.getByText('Checkout: Overview')).toBeVisible();

  await page.getByTestId('finish').click();

  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();
});
