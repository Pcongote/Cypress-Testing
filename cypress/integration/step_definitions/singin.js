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
    "password": "#passwd",
    "Day": "#days",
    "Month": "#months",
    "Year": "#years",
    "first name Adress": "#firstname",
    "last name Adress": "#lastname",
    "company": "#company",
    "aderess": "#address1",
    "city": "#city",
    "state": "#id_state",
    "zip code": "#postcode",
    "information": "#other",
    "phone": "#phone",
    "mobile phone": "#phone_mobile",
    "register": "#submitAccount > span",
    "search": "#search_query_top",
    "lens": "#searchbox > .btn",
    "special yellow dress": "Printed Summer Dress",
    "black color": "#color_11",
    "Add to car": ".exclusive > span",
    "continue shopping": ".continue > span",
    "printed dress": '[title="Printed Dress"]',
    "Proceed to checkout": ".button-medium > span",
    "eliminate": ".icon-trash",
    "next step": ".cart_navigation > .button > span",
    "I agree to the terms of service": "#cgv",
    "pay by bank wire": ".bankwire > span"
    


}

Given('I open the login page', () => {
    cy.visit(url)
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

When ('I Select {string} in the {string} dropdown', (text, elementName)=>{
    cy.get(selectors[elementName]).select(text)
})

When ("I choose the {string} button", (elementName) => {
    cy.contains(selectors[elementName]).click()

})

When ("I add to cart {string}", (elementName) => {
    cy.get(selectors[elementName]).eq(1).click()
})

When("I wanna {string} the first option in the checkout", (elementName) => {
    cy.get(selectors[elementName]).eq(0).click()
})

Then('I expect to see the price {string}', (price) => {
    cy.get('.box').should('contain', price)
    cy.get('.box').first().screenshot()
})
