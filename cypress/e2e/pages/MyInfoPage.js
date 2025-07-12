class MyInfoPage {
  elements = {
    myInfoTab: () => cy.contains('My Info'),
    personalDetailsHeader: () => cy.contains('Personal Details'),
    contactDetailsTab: () => cy.contains('Contact Details'),
    contactDetailsHeader: () => cy.contains('Contact Details')
  }

  navigateToMyInfo() {
    this.elements.myInfoTab().click();
  }

  validatePersonalDetailsVisible() {
    this.elements.personalDetailsHeader().should('be.visible');
  }

  navigateToContactDetails() {
    this.elements.contactDetailsTab().click();
  }

  validateContactDetailsVisible() {
    this.elements.contactDetailsHeader().should('be.visible');
  }
}

export default new MyInfoPage();
