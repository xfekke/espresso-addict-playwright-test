Feature: Game displays an image

  Scenario: Outside Cafe image
    Given that I am outside the cafe
    When I do nothing
    Then I should see an image of the cafe
    And I should see a descriptive text explaining the scenario

  Scenario: Inside Cafe image
    Given that I am outside the cafe
    When I click the "Enter the cafe" button
    Then I should see an image displayed inside the cafe
    And I should see a descriptive text explaining the scenario

  Scenario: Empty Street Image
    Given that I am outside the cafe
    When I click the "Go north" button
    Then I should see an image of the empty street
    And I should see a descriptive text explaining the scenario

  Scenario: Crowded Bar Image
    Given that I am outside the cafe
    When I click the "Go north" button
    And I click the "Go east" button
    Then I should see an image of a crowded bar
    And I should see a descriptive text explaining the scenario

  Scenario: Country-side Image
    Given that I am outside the cafe
    When I click the "Go south" button
    Then I should see an image of the country-side
    And I should see a descriptive text explaining the scenario

  Scenario: Guitarist and Saxplayer Image
    Given that I am outside the cafe
    When I click the "Go south" button
    And I click the "Go west" button
    Then I should see an image of a guitarist and saxplayer
    And I should see a descriptive text explaining the scenario