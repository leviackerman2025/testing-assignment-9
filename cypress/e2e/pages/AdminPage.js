class AdminPage {
  elements = {
    adminTab: () => cy.contains('Admin'),
    addBtn: () => cy.contains('Add'),
    // Selector username berdasarkan label agar lebih robust
    usernameField: () => cy.get('label').contains('Username').parent().parent().find('input'),
    roleDropdown: () => cy.get('.oxd-select-text').eq(0),
    option: (role) => cy.contains('.oxd-select-option', role),
    saveBtn: () => cy.contains('Save'),
    searchField: () => cy.get('input[placeholder="Search"]'),
    tableBody: () => cy.get('.oxd-table-body'),
    loadingSpinner: () => cy.get('.oxd-loading-spinner', { timeout: 10000 }),
    employeeNameField: () => cy.get('input[placeholder="Type for hints..."]'),
    passwordField: () => cy.get('label').contains('Password').parent().parent().find('input[type="password"]'),
    confirmPasswordField: () => cy.get('label').contains('Confirm Password').parent().parent().find('input[type="password"]'),
    statusDropdown: () => cy.get('label').contains('Status').parent().parent().find('.oxd-select-text'),
  }

  navigateToAdmin() {
    this.elements.adminTab().click()
    // Wait for the Admin page header or filter to ensure the page is loaded
    cy.contains('System Users', { timeout: 10000 }).should('be.visible')
  }

  addAdmin(username, role) {
    this.elements.addBtn().click()
    cy.contains('Add User', { timeout: 10000 }).should('be.visible')

    // Isi employee name dengan "Rahul Das" dan pilih suggestion yang sesuai
    this.elements.employeeNameField().clear().type('Rahul Das')
    cy.contains('.oxd-autocomplete-option', 'Rahul Das').click()

    // Isi username (clear dulu)
    if (!username) throw new Error('Username kosong!')
    this.elements.usernameField().clear().type(username)

    // Pilih role
    this.elements.roleDropdown().click()
    this.elements.option(role).click()

    // Pilih status (Enabled)
    this.elements.statusDropdown().click()
    cy.get('.oxd-select-option').contains('Enabled').click()

    // Isi password dan confirm password yang sama (clear dulu)
    const password = 'Admin123!'
    this.elements.passwordField().clear().type(password)
    this.elements.confirmPasswordField().clear().type(password)

    // Klik save
    this.elements.saveBtn().click()

    // Tunggu hingga kembali ke halaman User List
    cy.contains('System Users', { timeout: 10000 }).should('be.visible')
  }

  validateUserExists(username) {
    // Optionally search for the username to ensure the table is filtered
    this.elements.searchField().clear().type(username).type('{enter}')
    // Wait for any loading spinner to disappear (if present)
    cy.get('body').then($body => {
      if ($body.find('.oxd-loading-spinner').length) {
        this.elements.loadingSpinner().should('not.exist')
      }
    })
    // Wait for the table body to be visible with a longer timeout
    this.elements.tableBody().should('be.visible', { timeout: 10000 })
    // Assert that the username appears in the table body
    this.elements.tableBody().should('contain', username)
  }
}

export default new AdminPage()
