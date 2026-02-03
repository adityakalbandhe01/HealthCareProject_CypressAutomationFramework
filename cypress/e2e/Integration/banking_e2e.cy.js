import LoginPage from '../../pages/LoginPage'
import AccountsPage from '../../pages/AccountsPage'
import TransferFundsPage from '../../pages/TransferFundsPage'
import BillPayPage from '../../pages/BillPayPage'

describe('Banking E2E Flow using POM', () => {

  const loginPage = new LoginPage()
  const accountsPage = new AccountsPage()
  const transferPage = new TransferFundsPage()
  const billPayPage = new BillPayPage()

  before(() => {
    cy.fixture('bankdata').as('user')
  })

  it('Login, Transfer Funds, Bill Pay, Logout', function () {

    // Login
    loginPage.visit()
    loginPage.login(this.user.username, this.user.password)

    // Verify login
    accountsPage.verifyLoginSuccess()

    // Transfer Funds
    accountsPage.goToTransferFunds()
    transferPage.enterAmount(this.user.transferAmount)
    transferPage.submitTransfer()
    transferPage.verifyTransferSuccess()

    // Bill Pay
    accountsPage.goToBillPay()
    billPayPage.fillPayeeDetails(this.user.billPay)
    billPayPage.submitPayment()
    billPayPage.verifyBillPaySuccess()

    // Logout
    accountsPage.logout()
  })
})