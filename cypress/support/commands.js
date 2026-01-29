// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {

  cy.get("#login2")
    .should("be.visible")
    .click()

  cy.get("#logInModal")
    .should("have.class", "show")

  cy.get("#loginusername")
    .should("be.visible")
    .clear()
    .type(username, { delay: 50 })
    .should("have.value", username)

  cy.get("#loginpassword")
    .clear()
    .type(password, { delay: 50 })

  cy.contains("#logInModal button", "Log in").click()
})