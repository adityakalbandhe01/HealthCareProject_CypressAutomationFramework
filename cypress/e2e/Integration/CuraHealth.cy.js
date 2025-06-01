describe('Cura Make Appointment', function(){

it('Visit the URL', function () {

    cy.visit('https://katalon-demo-cura.herokuapp.com/')
     
})
it('Click on Make Appointment',function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.wait(4000)
    cy.get('#btn-make-appointment').click()

})
it('Make Appointment', function(){
    cy.get('#txt-username').type('JohnDoe')
cy.get('#txt-password').type('ThisIsNotAPassword')
cy.get('#btn-login').click()


})
it('Verify the Appointment',function(){


})

})