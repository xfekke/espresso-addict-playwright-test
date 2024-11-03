Feature: I win the game by completing all actions in different orders
  As a player, I want to win the game by performing all required actions in different orders,
  so I can verify that both paths lead to a win.

  Background:
    Given that I have started the game by navigating to "http://localhost:3000"

  Scenario Outline: Winning the game by performing all actions in different orders
    Given that I navigated to the position "<firstLocation>"
    And I wait repeatedly until "<firstAction>" message appears
    And that I navigated to the position "<secondLocation>"
    And I wait repeatedly until "<secondAction>" message appears
    And that I navigated to the position "<finalLocation>"
    And I click the Buy an espresso button until I have no money left
    And I wait repeatedly until "<finalMessage>" message appears
    And I click the "Give beer to barista" button
    Then I should have <quantity> "<finalItem>"
    And I should see the "<endButton>" button

    Examples: Winning Paths
      | firstLocation    | firstAction   | secondLocation   | secondAction  | finalLocation   | finalMessage       | quantity | finalItem | endButton  |
      | at the concert   | jam with us   | in a crowded bar | a can of beer | inside the cafe | bring me a beer... | 5        | Espressos | Play again |
      | in a crowded bar | a can of beer | at the concert   | jam with us   | inside the cafe | bring me a beer... | 5        | Espressos | Play again |
