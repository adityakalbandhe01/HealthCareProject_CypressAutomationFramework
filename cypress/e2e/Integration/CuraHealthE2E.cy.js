describe('Cura Make Appointment', function () {
  it('should make an appointment successfully', function () {
    // Step 1: Visit the site
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Step 2: Click Make Appointment
    cy.get('#btn-make-appointment').click();

    // Step 3: Login
    cy.get('#txt-username').type('John Doe');
    //djdjdj
    //jdjd
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    // Optional: Add assertion to verify login success
    cy.url().should('include', '/#appointment');

    //Step 4 : Select Appointment details \
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
cy.get('#txt_visit_date').type('05/06/2025')
//cy.get('tbody > :nth-child(2) > :nth-child(4)').click()
cy.get('#txt_comment').click({force: true});
cy.get('#txt_comment').type('Tesst')
cy.get('#btn-book-appointment').click()

//Step 5 Assert the result


cy.get('h2').contains('Appointment Confirmation')
cy.get('#comment').contains('Tesst')
  });
});