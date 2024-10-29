import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from 'playwright';

let browser, page;

Given('I am on the Playwright homepage', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://playwright.dev/');
});

Then('the page title should contain {string}', async (title) => {
    await expect(page).toHaveTitle(new RegExp(title));
});

When('I click on the {string} link', async (linkText) => {
    await page.getByRole('link', { name: linkText }).click();
});

Then('I should see the {string} heading', async (headingText) => {
    await expect(page.getByRole('heading', { name: headingText })).toBeVisible();
    await browser.close();
});
