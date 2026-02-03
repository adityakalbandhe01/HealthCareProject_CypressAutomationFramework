class TransferFundsPage {

  enterAmount(amount) {
    cy.get('#amount').type(amount)
  }

  submitTransfer() {
    cy.get('input[value="Transfer"]').click()
  }

  verifyTransferSuccess() {
    // Parabank hides this message → assert existence
    cy.contains('Transfer Complete!').should('exist')
  }
}

export default TransferFundsPage