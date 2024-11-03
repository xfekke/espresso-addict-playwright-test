// helpButton.js
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import {
  getMenuChoiceElement,
  getAllCurrentMenuChoices,
} from './helpers.js';

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
  // Wait for the 'p.description' element to be present
  const descriptionElement = await this.getWait('p.description', 5000);
  // Get the text content of the element
  const descriptionText = await this.getText(descriptionElement);
  // Check that the text is not empty
  expect(descriptionText.trim()).to.not.equal('');
});

// Step to verify that a button with the given text is visible
Then('I should see the {string} button', async function (buttonText) {
  const { choices } = await getAllCurrentMenuChoices(this);
  expect(choices).to.include(buttonText);
});
