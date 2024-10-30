// helpButton.js
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import {
  getMenuChoiceElement,
  getAllCurrentMenuChoices,
  checkIfDescriptionContainsString,
} from './helpers.js';

// Since "Given that I have started the game by navigating to {string}" and
// "Given that I navigated to the position {string}" are defined in commonSteps.js,
// we don't repeat them here.

// Step to click a button with the given text
When('I click the {string} button', async function (buttonText) {
  const button = await getMenuChoiceElement(this, buttonText);
  await button.click();
});

// Step for when the button has already been clicked
Given('I have clicked the {string} button', async function (buttonText) {
  const button = await getMenuChoiceElement(this, buttonText);
  await button.click();
});

// Step to verify that helpful text is displayed
Then('I should see helpful text', async function () {
  const isHelpTextDisplayed = await checkIfDescriptionContainsString(this, 'help', true);
  expect(isHelpTextDisplayed).to.be.true;
});

// Step to verify that a button with the given text is visible
Then('I should see the {string} button', async function (buttonText) {
  const { choices } = await getAllCurrentMenuChoices(this);
  expect(choices).to.include(buttonText);
});
