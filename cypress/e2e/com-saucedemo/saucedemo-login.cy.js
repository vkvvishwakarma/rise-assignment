/// <reference types="cypress" />

describe('example to-do app', () => {

    it("should verify the open link for Swag Labs", () => {
        cy.visit("/")
        cy.title().should('eq',"Swag Labs");
      //  cy.get('[date-test="login-button"]').should("be.visible").should("have.length", "6");
    })

})
