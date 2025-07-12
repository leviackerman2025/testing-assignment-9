Feature: View My Info

  Scenario: User views their personal information
    Given user is logged in as "Admin" with "admin123"
    When user navigates to My Info page
    Then user should see their personal details

  Scenario: User views contact details
    Given user is logged in as "Admin" with "admin123"
    When user navigates to My Info page
    And user navigates to Contact Details tab
    Then user should see their contact details
