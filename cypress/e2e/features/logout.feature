Feature: Logout

  Scenario: User logs out successfully
    Given user is logged in as "Admin" with "admin123"
    When user logs out
    Then user should see the login page

  Scenario: User opens logout dropdown but does not logout
    Given user is logged in as "Admin" with "admin123"
    When user opens the user dropdown
    Then user should still see the dashboard page
