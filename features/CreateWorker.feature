Feature: Create Worker

Scenario: Using a valid URL
    Given I have a valid JS file hosted in the same server
    When I create a worker
    Then I should receive a worker instance
    And the return should be memoized
