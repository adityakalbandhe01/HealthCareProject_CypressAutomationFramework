describe('Parabank Banking E2E Flow', () => {

  before(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('Login, transfer funds, pay bill and logout', () => {

    // ---------- LOGIN ----------
    cy.get('input[name="username"]').type('john')
    cy.get('input[name="password"]').type('demo')
    cy.get('input[value="Log In"]').click()

    // Assertion: Successful login
    cy.url().should('include', 'overview.htm')
    cy.contains('Accounts Overview').should('be.visible')

    // ---------- ACCOUNTS OVERVIEW ----------
    cy.get('#accountTable').should('be.visible')
    cy.get('#accountTable tbody tr').should('have.length.greaterThan', 0)

    // Capture first account number
    cy.get('#accountTable tbody tr td a')
      .first()
      .invoke('text')
      .as('fromAccount')

    // ---------- TRANSFER FUNDS ----------
 // ---------- TRANSFER FUNDS ----------
cy.contains('Transfer Funds').click()
cy.url().should('include', 'transfer.htm')

cy.get('#amount').type('100')
cy.get('input[value="Transfer"]').click()

// Assertion (correct for Parabank)
cy.contains('Transfer Complete!').should('exist')

    // ---------- BILL PAY ----------
    cy.contains('Bill Pay').click()
    cy.url().should('include', 'billpay.htm')

    cy.get('input[name="payee.name"]').type('Electric Company')
    cy.get('input[name="payee.address.street"]').type('MG Road')
    cy.get('input[name="payee.address.city"]').type('Pune')
    cy.get('input[name="payee.address.state"]').type('MH')
    cy.get('input[name="payee.address.zipCode"]').type('411001')
    cy.get('input[name="payee.phoneNumber"]').type('9999999999')
    cy.get('input[name="payee.accountNumber"]').type('12345')
    cy.get('input[name="verifyAccount"]').type('12345')
    cy.get('input[name="amount"]').type('50')

    cy.get('input[value="Send Payment"]').click()

    // Assertion: Bill payment success
    cy.contains('Bill Payment Complete').should('be.visible')

    // ---------- LOGOUT ----------
    cy.contains('Log Out').click()
    cy.url().should('include', 'index.htm')
  })
})