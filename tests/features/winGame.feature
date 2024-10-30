Feature: I win the game in two different ways


  Scenario: Winning the game by going north
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "<location>"
    And I wait until I have "a can of beer" in my "bag"
    And that I navigated to the position "<location>"
    And I click the "Buy an espresso" button 3 times
    And I wait until I can click the "Give beer to barista" button
    Then I should have 5 "Espressos"
    And I should see the "Play again" button

  Scenario: Winning the game by going south
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "<location>"
    And I wait until I can click the "Jam with the band" button
    And that I navigated to the position "<location>"
    And I click the "Buy an espresso" button 3 times
    And I wait until I can click the "Give beer to barista" button
    Then I should have 5 "Espressos"
    And I should see the "Play again" button