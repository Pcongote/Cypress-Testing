Feature: Test My Store page

    As a user I want to sign in into My Store
    Complete a search and buy an article

    # Scenario: Test My Store page
    #     Given I open the login page and complete the sign in process
    #     When I add two products and remove one
    #     And I complete the purchase
    #     Then I expect to see the price "52.99"

    Scenario: Test My Store page step by step
        Given I open the login page
        When I click the "sign in" button
          And I type "email@mail.com" in the "email" field
          And I click the "create an account" button
          And I click the "gender" button
          And I type "Joe" in the "first name" field
          And I type "Doe" in the "last name" field
          And I type "123465789" in the "password" field
          And I Select "27" in the "Day" dropdown
          And I Select "April" in the "Month" dropdown
          And I Select "1990" in the "Year" dropdown
          And I type "Joe" in the "first name Adress" field
          And I type "Doe" in the "last name Adress" field
          And I type "False company" in the "company" field
          And I type "False street 123" in the "aderess" field
          And I type "Miami" in the "city" field
          And I Select "Florida" in the "state" dropdown
          And I type "33101" in the "zip code" field
          And I type "Information XXXXXXXXXXXX" in the "information" field
          And I type "1234567890" in the "phone" field
          And I type "10987654321" in the "mobile phone" field
          And I click the "register" button
          And I type "shirt" in the "search" field
          And I click the "lens" button
          And I choose the "special yellow dress" button
          And I click the "black color" button
          And I click the "Add to car" button
          And I click the "continue shopping" button
          And I type "Dress" in the "search" field
          And I click the "lens" button
          And I add to cart "printed dress"
          And I click the "Add to car" button
          And I click the "Proceed to checkout" button
          And I wanna "eliminate" the first option in the checkout
          And I click the "next step" button
          And I click the "next step" button
          And I click the "I agree to the terms of service" button
          And I click the "next step" button
          And I click the "pay by bank wire" button
          And I click the "next step" button
          Then I expect to see the price "52.99"

          
          

          


