import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.gotoUrl(url);
  // Important: wait for the relevant DOM element(s) to exist
  // - we should choose to wait for an element we expect to only be in the DOM
  //   with correct content/text to verify that the app has fully loaded
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]', 1000);
  await this.getWait('.choices ul li:nth-child(2)', 1000);
});

Given('that I navigated to the position {string}', async function (to) {
    await navigateTo(this, to);
  });

Given('that my position is {string}', async function (position) {
  expect(await getWhereIAm(this)).to.equal(position);
});

Then('my position should be {string}', async function (position) {
    expect(await getWhereIAm(this)).to.equal(position);
  });

// Step to click a button with the given text
When('I click the {string} button', async function (buttonText) {
  const button = await getMenuChoiceElement(this, buttonText);
  await button.click();
});
