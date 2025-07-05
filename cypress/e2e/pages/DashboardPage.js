class DashboardPage {
  elements = {
    dashboardHeader: () => cy.get('.oxd-topbar-header-title')
  }

  validateDashboardVisible() {
    this.elements.dashboardHeader().should('contain', 'Dashboard')
  }
}

export default new DashboardPage()
