import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://automationpractice.com/index.php'

const selectors = {
    "sign in": ".login",
    "create an account": "#SubmitCreate > span",
    "register": "'#submitAccount > span'",
    "email": "#email_create",
    "gender": "#id_gender1",
    "first name": "#customer_firstname",
    "last name":  "#customer_lastname",
    "password": "#passwd"
}

Given('I open the login page and complete the sign in process', () => {
    cy.visit(url)
    cy.get('.login').click()
    cy.get('#email_create').click().type('falseff_' + Math.floor(Math.random() * 1000) + 1 + '@gmail.com')
    cy.get('#SubmitCreate > span').click()
    cy.get('#id_gender1').click()
    cy.get('#customer_firstname').type('Joe')
    cy.get('#customer_lastname').type('Doe')
    cy.get('#passwd').type('123456798')
    cy.get('#days').select('27')
    cy.get('#months').select('April')
    cy.get('#years').select('1950')
    cy.get('#firstname').type('Joe')
    cy.get('#lastname').type('Doe')
    cy.get('#company').type('false Job')
    cy.get('#address1').type('False street 123')
    cy.get('#city').type('Miami')
    cy.get('#id_state').select('Florida')
    cy.get('#postcode').type('33101')
    cy.get('#other').type('Information XXXXXXXXXXXX')
    cy.get('#phone').type('123456894')
    cy.get('#phone_mobile').type('123456123')
    cy.get('#submitAccount > span').click()
    cy.screenshot()
})

Given('I open the login page', () => {
    cy.visit(url)
})

When('I add two products and remove one', () => {
    cy.get('#search_query_top').type('shirt')
    cy.get('#searchbox > .btn').click()
    cy.contains('Printed Summer Dress').click()
    cy.get('#color_11').click()
    cy.screenshot()
    cy.get('.exclusive > span').click()
    cy.wait(8000)
    cy.get('.continue > span').click()
    cy.get('#search_query_top').type('jean')
    cy.get('#searchbox > .btn').click()
    cy.get('#search_query_top').clear()
    cy.get('#search_query_top').type('Dress')
    cy.get('#searchbox > .btn').click()
    cy.get('[title="Printed Dress"]').eq(1).click()
    cy.screenshot()
    cy.get('.exclusive > span').click()
    cy.wait(8000)
    cy.get('.button-medium > span').click()
    cy.get('.icon-trash').eq(0).click()
    cy.wait(3000)
})

When('I complete the purchase', () => {
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.bankwire > span').click()
    cy.get('#cart_navigation > .button > span').click()
})

When('I click the {string} button', (elementName) => {
    cy.get(selectors[elementName]).click()
})

When('I type {string} in the {string} field', (text, elementName) => {
    const email = 'falseff_' + Math.floor(Math.random() * 1000) + 1 + '@gmail.com'

    if (text.includes("email")) {
        cy.get(selectors[elementName]).type(email)
    }
    else {
        cy.get(selectors[elementName]).type(text)
    }
})

Then('I expect to see the price {string}', (price) => {
    cy.get('.box').should('contain', price)
    cy.get('.box').first().screenshot()
})
