class AccountsPage {

  verifyLoginSuccess() {
    cy.url().should('include', 'overview.htm')
    cy.contains('Accounts Overview').should('exist')
  }

  goToTransferFunds() {
    cy.contains('Transfer Funds').click()
  }

  goToBillPay() {
    cy.contains('Bill Pay').click()
  }

  logout() {
    cy.contains('Log Out').click()
  }
}

export default AccountsPage