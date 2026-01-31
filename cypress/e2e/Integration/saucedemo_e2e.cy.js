describe('SauceDemo E2E Flow', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login, add product to cart, checkout and logout', () => {

    // ---------- LOGIN ----------
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Assertion: User lands on products page
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')

    // ---------- ADD TO CART ----------
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // ---------- CART ----------
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')

    // ---------- CHECKOUT ----------
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    cy.get('[data-test="firstName"]').type('Aditya')
    cy.get('[data-test="lastName"]').type('Kalbandhe')
    cy.get('[data-test="postalCode"]').type('411001')
    cy.get('[data-test="continue"]').click()

    // ---------- OVERVIEW ----------
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.summary_total_label').should('be.visible')

    cy.get('[data-test="finish"]').click()

    // ---------- ORDER CONFIRMATION ----------
    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!')

    // ---------- LOGOUT ----------
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})