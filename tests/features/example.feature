Feature: Example tests for Playwright

Scenario: Verify the Playwright homepage title
    Given I am on the Playwright homepage
    Then the page title should contain "Playwright"

Scenario: Verify the Get Started link
    Given I am on the Playwright homepage
    When I click on the "Get started" link
    Then I should see the "Installation" heading
