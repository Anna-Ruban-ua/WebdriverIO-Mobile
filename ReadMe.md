# WebdriverIO Mobile Automation Project

## Summary of Repo

This repository contains automated mobile UI tests for the Android Native Demo App using WebdriverIO and JavaScript. The project follows the Page Object Model (POM) design pattern, uses random value generation, and integrates with BrowserStack for cloud-based device testing. It includes Allure Report for test reporting and GitHub Actions for CI/CD execution.

## Test Cases

Detailed test cases are documented in [this spreadsheet](https://docs.google.com/spreadsheets/d/1kFxCbMbhzeUhoP5vcxhSACwCvcWFo7M_DHx_i7fOb7Q/edit?pli=1&gid=0#gid=0).

## 📄 Latest [Allure Report](https://dfgh).

## Requirements

* Node.js (latest LTS recommended)
* JavaScript
* WebdriverIO v9
* Appium
* BrowserStack account
* Allure Commandline
* GitHub (for CI/CD and version control)

## Setup Instructions

1. **Clone the repository:**

```sh
git clone https://github.com/Anna-Ruban-ua/WebdriverIO-Mobile
```

2. **Navigate into the project directory:**

```sh
cd WebdriverIO-Mobile
```

3. **Install dependencies:**

```sh
npm install
```

4. **Prepare your BrowserStack credentials:**

   * Go to [BrowserStack Account Settings](https://www.browserstack.com/accounts/settings)
   * Copy your Username and Access Key
   * Add them as GitHub Secrets:

     * `BROWSERSTACK_USERNAME`
     * `BROWSERSTACK_ACCESS_KEY`

5. **Upload your app to BrowserStack with a custom ID:**

```sh
curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@/path/to/Android-NativeDemoApp-0.4.0.apk" \
  -F "custom_id=NativeDemoApp"
```

## Run Tests

### Run tests on BrowserStack Pixel 3:

```sh
npm run test:bs:pixel3
```

### Run tests on BrowserStack Pixel 7 Pro:

```sh
npm run test:bs:pixel7
```

### Run tests on both devices:

```sh
npm run test:bs:all
```

## Generate Report

### Generate Allure Report:

```sh
npm run report:allure:generate
```

### Open Allure Report:

```sh
npm run report:allure:open
```

## CI/CD with GitHub Actions

* The `.github/workflows/browserstack.yml` file contains the CI pipeline.
* On every push, tests are executed on BrowserStack.
* Allure reports are generated and deployed.