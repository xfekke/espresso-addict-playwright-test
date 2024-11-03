import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


When('I wait repeatedly until {string} message appears', async function (message) {
  while (true) {
    const descriptionText = await this.page.locator('.description').textContent();

    if (descriptionText && descriptionText.includes(message)) {
      if (message === 'jam with us') {
        const jamButton = this.page.locator('.choices li:has-text("Jam with the band")');
        if (await jamButton.isVisible()) {
          await jamButton.click();
          await this.page.waitForTimeout(10);
        }
      }
      break;
    }
    await this.page.locator('.choices li:has-text("Wait")').click();
    await this.page.waitForTimeout(10);
  }
});

When('I click the {string} button', async function (buttonText) {
  await this.page.locator(`.choices li:has-text("${buttonText}")`).click();
});

When('I click the Buy an espresso button until I have no money left', async function () {
  const buyEspressoButton = this.page.locator('.choices li:has-text("Buy an espresso")');
  const moneyValue = this.page.locator('.money .val');

  while (true) {
    const moneyText = await moneyValue.textContent();
    const moneyAmount = parseInt(moneyText, 10);

    if (moneyAmount <= 0) {
      break;
    }
    await buyEspressoButton.click();
    await this.page.waitForTimeout(10);
  }
});

Then('I should have {int} {string}', async function (quantity, itemName) {
  if (itemName === "Espressos") {
    const espressoLocator = this.page.locator('.espressocups .val');
    const espressoCountText = await espressoLocator.innerText();
    const espressoCount = parseInt(espressoCountText, 10);

    expect(espressoCount).to.equal(quantity);
  } else {
    throw new Error(`Unknown item: ${itemName}`);
  }
});

Then('I should see the {string} button', async function (buttonText) {
  const buttonLocator = this.page.locator(`.choices li:has-text("${buttonText}")`);
  expect(await buttonLocator.isVisible()).to.be.true;
});

When('I wait until {string} appears', async function (message) {
  const messageLocator = this.page.locator(`.description:has-text("${message}")`);
  await messageLocator.waitFor({ state: 'visible', timeout: 5000 });
});
