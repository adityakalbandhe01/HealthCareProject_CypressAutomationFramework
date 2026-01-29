describe("Demoblaze E2E Automation Suite", () => {

  let userData

  before(() => {
    // Load test data
    cy.fixture("userData").then((data) => {
      userData = data
    })
  })

  beforeEach(() => {
    cy.visit("https://www.demoblaze.com")
  })

  it("E2E Flow: Login → Add Product → Place Order → Logout", () => {

    // 🔹 Intercept API call
    cy.intercept("POST", "**/login").as("loginAPI")

    cy.wait(5000)
    // 🔹 Login using custom command
    cy.login(userData.username, userData.password)

    cy.wait("@loginAPI").its("response.statusCode").should("eq", 200)

    cy.contains("Welcome").should("be.visible")

    // 🔹 Select product
    cy.contains("Samsung galaxy s6").click()

    cy.get(".name").should("contain", "Samsung")

    // 🔹 Handle alert
    cy.contains("Add to cart").click()

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Product added")
    })

    // 🔹 Navigate to Cart
    cy.contains("Cart").click()

    cy.get(".success td").should("contain", "Samsung")

    // 🔹 Place Order
    cy.contains("Place Order").click()

    cy.get("#name").type("Aditya")
    cy.get("#country").type("India")
    cy.get("#city").type("Pune")
    cy.get("#card").type("4111111111111111")
    cy.get("#month").type("12")
    cy.get("#year").type("2026")

    cy.contains("Purchase").click()

    // 🔹 Final Assertion
    cy.contains("Thank you for your purchase").should("be.visible")

    cy.contains("OK").click()

// // Wait until order modal is closed
// cy.get("#orderModal")
//   .should("not.have.class", "show")

// // Backdrop still exists but not blocking
// cy.get(".modal-backdrop")
//   .should("have.css", "opacity", "0")

// cy.get("#logout2")
//   .scrollIntoView()
//   .should("be.visible")
//   .click()

// cy.contains("Log in").should("be.visible")
//   })

//   after(() => {
//     cy.log("E2E Test Execution Completed")
  })
})