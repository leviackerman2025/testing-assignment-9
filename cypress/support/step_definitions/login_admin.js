import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../e2e/pages/LoginPage"
import DashboardPage from "../../e2e/pages/DashboardPage"
import AdminPage from "../../e2e/pages/AdminPage"
import users from "../../fixtures/users.json"

Given('user is on the login page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('user logs in using username {string} and password {string}', (username, password) => {
  LoginPage.login(username, password)
})

Then('user should see the dashboard page', () => {
  DashboardPage.validateDashboardVisible()
})

// Negative case: login gagal
When('user logs in with invalid credentials', () => {
  LoginPage.login(users.invalidUser.username, users.invalidUser.password)
})

Then('user should see a login error message', () => {
  LoginPage.elements.errorMessage().should('be.visible')
})

Given('user is logged in as {string} with {string}', (username, password) => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  LoginPage.login(username, password)
})

Given('user navigates to Admin page', () => {
  AdminPage.navigateToAdmin()
})

When('user adds a new admin {string} with role {string}', (newUsername, role) => {
  AdminPage.addAdmin(newUsername, role)
})

Then('the admin {string} should appear in the user list', (newUsername) => {
  AdminPage.validateUserExists(newUsername)
})

Then('user should see an error message', () => {
  LoginPage.elements.errorMessage().should('be.visible')
})

// Screenshot after each scenario
After(function (scenario) {
  const name = scenario.pickle.name.replace(/ /g, "_")
  cy.screenshot(`screenshots/${name}`)
})
