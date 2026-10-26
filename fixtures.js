const base = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

const test = base.test.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

module.exports = {
    test, 
    expect: base.expect
};
