# Cross-Browser Automation Framework

**Playwright | JavaScript | Node.js | GitHub Actions**

## 📌 Project Overview

This project demonstrates a reusable cross-browser automation framework built using Playwright and JavaScript. It automates critical e-commerce workflows on the SauceDemo demo website and validates application behavior across Chromium, Firefox, and WebKit.

The framework follows the Page Object Model (POM), uses reusable test fixtures, and supports automated execution through GitHub Actions.

## 🎯 Project Objectives

- Automate critical web application workflows.
- Validate functionality across multiple browser engines.
- Implement reusable page objects and fixtures.
- Improve debugging through trace-based analysis and failure screenshots.
- Integrate automated tests into a CI/CD workflow using GitHub Actions.

## 🛠️ Tech Stack

- **Language:** JavaScript
- **Automation Tool:** Playwright Test
- **Runtime:** Node.js
- **Design Pattern:** Page Object Model (POM)
- **Browsers:** Chromium, Firefox, WebKit
- **CI/CD:** GitHub Actions
- **Reporting:** Playwright HTML Reporter
- **Version Control:** Git and GitHub

## 🧪 Test Scenarios

### Login
- Verify login with valid credentials.
- Validate error messages for invalid credentials.
- Verify validation when the username is empty.

### Product and Shopping Cart
- Validate product sorting by price from low to high.
- Add a product to the shopping cart.
- Verify the cart badge and selected product.

### Checkout
- Complete the checkout information.
- Verify the checkout overview.
- Validate the successful order confirmation.

## 🏗️ Framework Structure

```text
cross-browser-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── testFixtures.js
├── pages/
│   └── loginPage.js
├── tests/
│   ├── login.spec.js
│   └── shopping.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the project:

- Node.js (LTS)
- Visual Studio Code
- Git

## 🚀 Installation and Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd cross-browser-automation
```

Install dependencies:

```bash
npm install
```

Install the required Playwright browsers:

```bash
npx playwright install chromium firefox webkit
```

## ▶️ Running Tests

Run all cross-browser tests:

```bash
npm test
```

Run tests with visible browsers:

```bash
npm run test:headed
```

Run tests in individual browsers:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Generate and open the HTML report:

```bash
npm run report
```

## 🔍 Debugging and Reporting

The framework is configured to support:

- Screenshots on test failure.
- Playwright traces for debugging failed tests.
- HTML test reports.
- Test retries in CI environments.

## 🔄 GitHub Actions Integration

The project includes a GitHub Actions workflow to execute the automated test suite on pushes and pull requests targeting the configured branches.

The workflow installs dependencies, sets up Playwright browsers, runs tests, and uploads test reports as workflow artifacts.

## 💡 Key Learning Outcomes

- Cross-browser test automation.
- Page Object Model implementation.
- Reusable Playwright fixtures.
- Locator strategies and assertions.
- Test isolation and browser configuration.
- Trace-based debugging and failure analysis.
- CI execution using GitHub Actions.

## 🌐 Application Under Test

[ SauceDemo — Demo E-commerce Website ](https://www.saucedemo.com/)

## 👨‍💻 Author

**Aditya RS**

[LinkedIn](https://www.linkedin.com/in/adityars6/) | [GitHub](https://github.com/AdityaAdi193)

---

*This is a learning and portfolio project created to demonstrate web UI automation and cross-browser testing practices.*
