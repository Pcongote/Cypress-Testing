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
          