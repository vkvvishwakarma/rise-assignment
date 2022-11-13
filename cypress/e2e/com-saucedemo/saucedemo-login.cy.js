/// <reference types="cypress" />

describe('example to-do app', () => {

let userName;
let userPassword;
    before(()=>{
        cy.visit("/");
        cy.fixture('login-credential.json').then((userFixture) => {
            userName = userFixture.user_name1;
            userPassword = userFixture.password;
            console.log("data = ",userName);
            cy.log(userFixture.password);
        })
    })

    it("should verify the login positive flow", () => {
        cy.title().should('eq',"Swag Labs");
        cy.get('[data-test="username"]').should("be.visible").clear().type(userName);
        cy.get('[data-test="password"]').should("be.visible").clear().type(userPassword);
        cy.get('[data-test="login-button"]').should("be.enabled").click();
    })
})
