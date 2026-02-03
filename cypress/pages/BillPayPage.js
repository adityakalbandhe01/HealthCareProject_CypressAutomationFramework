class BillPayPage {

  fillPayeeDetails(data) {
    cy.get('input[name="payee.name"]').type(data.name)
    cy.get('input[name="payee.address.street"]').type(data.street)
    cy.get('input[name="payee.address.city"]').type(data.city)
    cy.get('input[name="payee.address.state"]').type(data.state)
    cy.get('input[name="payee.address.zipCode"]').type(data.zip)
    cy.get('input[name="payee.phoneNumber"]').type(data.phone)
    cy.get('input[name="payee.accountNumber"]').type(data.account)
    cy.get('input[name="verifyAccount"]').type(data.account)
    cy.get('input[name="amount"]').type(data.amount)
  }

  submitPayment() {
    cy.get('input[value="Send Payment"]').click()
  }

  verifyBillPaySuccess() {
    cy.contains('Bill Payment Complete').should('exist')
  }
}

export default BillPayPage