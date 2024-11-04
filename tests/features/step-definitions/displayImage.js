import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('that I am outside the cafe', async function () {
  await this.page.goto('http://localhost:3000');
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('cloud-forest-cafe.jpg');
});

When('I do nothing', async function () {
  // Nothing
});

Then('I should see an image of the cafe', async function () {
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('cloud-forest-cafe.jpg');
});

Then('I should see an image displayed inside the cafe', async function () {
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('inside-cafe.jpg');
});

Then('I should see an image of the empty street', async function () {
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('street.jpg');
});

Then('I should see an image of a crowded bar', async function () {
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('bar.jpg');
});

Then('I should see an image of the country-side', async function () {
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('country-side.jpg');
});

Then('I should see an image of a guitarist and saxplayer', async function () {
  const image = this.page.locator('img.big-image');
  await image.waitFor({ state: 'visible', timeout: 10000 });
  const srcImage = await image.getAttribute('src');
  expect(srcImage).to.include('music-scene.jpg');
});

Then('I should see a descriptive text explaining the scenario', async function () {
  const description = this.page.locator('p.description');
  await description.waitFor({ state: 'visible', timeout: 10000 });
  const textContent = await description.textContent();
  expect(textContent.trim()).to.not.equal('');
});
