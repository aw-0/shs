// tests.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('SHS Tests', function() {
    it('Home', function() {
        //test moving between days
        cy.visit('localhost:8080/?date=1-1-2022')
        cy.contains('Saturday, January 1')
        cy.get('.main > :nth-child(3)').click()
        cy.contains('Sunday, January 2')

        //test that the main buttons are on the screen
        cy.visit('localhost:8080')
        cy.contains('Links')
        cy.contains('Schedule')
        cy.contains('Settings')
        cy.contains("Color")

        //test full screen mode
        cy.get('.full-screen-mode').click()  //tests if the color toggle works
        cy.get('.header').should('have.css', 'background-color', 'rgb(27, 94, 32)')
        cy.get('.remove-color').click()
        cy.get('.header').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })
    it('/BellSchedules', function() {
        //test switching bell schedules
        cy.visit('localhost:8080/?date=1-1-2022')
        cy.contains('Bell Schedules').click()
        cy.contains('Standard')
        cy.contains("1B").should('not.exist')
        cy.get(':nth-child(1) > .wrapper > .schedule-select > .dropdown > .select-option').click()
        cy.contains("Half Periods").click()
        cy.contains("1B")
        
        cy.get('.home').click() //return back home
        cy.contains("Links")
    })
    it('/Links', function() {
        //Make sure links appear
        cy.visit('localhost:8080/?date=1-1-2022')
        cy.contains('Links').click()
        cy.contains('D125')
        cy.contains('Testing Center')
    })
    it('/Tools', function() {
        //Test Adding Time to Timer
        cy.visit('localhost:8080')
        cy.contains('Tools').click() //click on tools page
        cy.get('.add-time-buttons > :nth-child(1)').click() //add time to the timer
        cy.get('.add-time-buttons > :nth-child(2)').click()
        cy.get('.add-time-buttons > :nth-child(3)').click()
        cy.get(':nth-child(4) > .selected').contains("21")
        cy.contains('Reset').click() //reset the timer
        cy.get(':nth-child(4) > .selected').contains("05")
        cy.get('.home').click() //go back home
        cy.contains("Links")
    })

    it('/Colors', function() {
        //Test Changing Themes
        cy.visit('localhost:8080/colors')
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.contains("Dark").click() //change to dark theme
        cy.get('body').should('have.css', 'background-color', 'rgb(35, 39, 42)')
        cy.get('.custom-color').contains("#b38825")

        //Test Setting a Custom Color
        cy.get('.color').first().click() 
        cy.get('.shade').first().click()
        cy.get('.custom-color').contains("#ffcdd2")
        cy.get('.custom-color').should('have.css', 'color', 'rgb(255, 205, 210)')
        
        //Test Color Conflict
        cy.contains("Light").click() //change back to light theme
        cy.contains("Color Conflict")
        cy.contains("No").click()
        cy.get('.custom-color').contains("#ffcdd2")
        cy.contains("Dark").click()
        cy.contains("Color Conflict")
        cy.contains("Yes").click()
        cy.get('.custom-color').contains("#b38825")
    })
})