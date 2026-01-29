describe("SauceDemo Stable E2E Flow", () => {

  let user

  beforeEach(() => {
    cy.fixture("user").then((data) => {
      user = data
    })
    cy.visit("https://www.saucedemo.com")
  })

  it("Login → Add to Cart → Checkout → Logout", () => {

    // 🔹 Login
    cy.login(user.username, user.password)

    cy.url().should("include", "/inventory.html")
    cy.contains("Products").should("be.visible")

    // 🔹 Add product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get(".shopping_cart_badge")
      .should("be.visible")
      .and("contain", "1")

    // 🔹 Go to cart
    cy.get(".shopping_cart_link").click()
    cy.contains("Sauce Labs Backpack").should("be.visible")

    // 🔹 Checkout
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type(user.firstName)
    cy.get('[data-test="lastName"]').type(user.lastName)
    cy.get('[data-test="postalCode"]').type(user.zip)

    cy.get('[data-test="continue"]').click()

    // 🔹 Final validation
    cy.contains("Checkout: Overview").should("be.visible")
    cy.contains("Sauce Labs Backpack").should("be.visible")

    cy.get('[data-test="finish"]').click()

    cy.contains("Thank you for your order!")
      .should("be.visible")

    // 🔹 Logout
    cy.get("#react-burger-menu-btn").click()
    cy.get("#logout_sidebar_link").should("be.visible").click()

    cy.url().should("eq", "https://www.saucedemo.com/")
  })
})