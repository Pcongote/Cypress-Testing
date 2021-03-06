/// <reference types="cypress" />

it("test", function(){
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email_create').click().type('falseff_' + Math.floor(Math.random() * 100) + 1 + '@gmail.com')
    cy.get('#SubmitCreate > span').click()
    cy.screenshot()
    cy.wait(10000)
    cy.get('#id_gender1').click
    cy.get('#customer_firstname').type('Joe')
    cy.get('#customer_lastname').type('Doe')
    cy.screenshot()
    cy.get('#passwd').type('123456798')
    cy.get('#days').select('27')
    cy.get('#months').select('April')
    cy.get('#years').select('1950')
    cy.screenshot()
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
    cy.screenshot()
    cy.get('#submitAccount > span').click()
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
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.bankwire > span').click()
    cy.get('#cart_navigation > .button > span').click()
    cy.get('.box').should('contain', '52.99')
    cy.get('.box').first().screenshot()
})
