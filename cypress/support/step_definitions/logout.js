import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/LoginPage";
import DashboardPage from "../../e2e/pages/DashboardPage";

// ...existing steps...

When('user opens the user dropdown', () => {
  cy.get('.oxd-userdropdown-tab').click();
});

Then('user should still see the dashboard page', () => {
  DashboardPage.validateDashboardVisible();
});