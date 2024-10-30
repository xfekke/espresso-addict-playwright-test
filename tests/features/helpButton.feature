Feature: Help Button

  Scenario: Clicking the help button
    Given that I have started the game by navigating to "http://localhost:3000"
    When I click the "Help" button
    Then I should see helpful text
    And I should see the "Continue" button

  Scenario: Clicking the continue button
    Given that I have started the game by navigating to "http://localhost:3000"
    And I have clicked the "Help" button
    When I click the "Continue" button
    Then my position should be "outside the cafe"

  Scenario: Clicking help then continue in the bar
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "in a crowded bar"
    And I have clicked the "Help" button
    When I click the "Continue" button
    Then my position should be "in a crowded bar"
