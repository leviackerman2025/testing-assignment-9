import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MyInfoPage from "../../e2e/pages/MyInfoPage";

When('user navigates to My Info page', () => {
  MyInfoPage.navigateToMyInfo();
});

Then('user should see their personal details', () => {
  MyInfoPage.validatePersonalDetailsVisible();
});

When('user navigates to Contact Details tab', () => {
  MyInfoPage.navigateToContactDetails();
});

Then('user should see their contact details', () => {
  MyInfoPage.validateContactDetailsVisible();
});