/// <reference types="cypress" />

describe('Sauce demo positive scenarios for login and add to cart', () => {

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

    it("should verify to select three item to cart",()=>{
        cy.get('[data-test^="add-to-cart"]').should("have.length.gt",0)
            .each(($element,index,list)=>{
            if(index < 3){
                cy.log( list.length + "==" + index);
                cy.wrap($element).click();
            }
        }).then((result)=>{
            cy.get(".shopping_cart_badge").should("have.text","3");
        })
    })

})
