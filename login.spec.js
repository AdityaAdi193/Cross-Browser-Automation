const {test, expect} = require('../fixtures/testfixtures');

test('login with valid credentials', async ({ LoginPage, page }) => {
    await loginPage.open();

    await loginPage.login('standard user', 'secret_sauce');

    await expect(page).tohaveURL(/inventory\.html/);
    await expect(
        page.getbyText('Products', {exact: true})
    ).tobeVisible();
});

test('Show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login('invalid_user', 'wrong_password');

    await expect(loginPage.errorMessage).tobeVisible();
    await expect(loginPage.errorMessage).toContainText(
        'Username and password do not match'
    );
});

test('Show validation when username is empty', async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login('', 'secret_sauce');

    await expect(loginPage.errorMessage).toContainText(
        'Username is required'
    );
});
