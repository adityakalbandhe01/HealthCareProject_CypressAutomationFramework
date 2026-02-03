class LoginPage {

  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('input[value="Log In"]').click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
}

export default LoginPage