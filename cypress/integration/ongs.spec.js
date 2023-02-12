/// <reference types="cypress" />

describe('Register ONG and Login', () => {
    it('Should be able to register', () => {
        cy.fixture('user').then((userData) =>{
            cy.get('.back-link').click();
            cy.get('[data-cy="name"]').type(userData.name);
            cy.get('[data-cy="email"]').type(userData.email);
            cy.get('[data-cy="whatsapp"]').type(userData.whatsapp);
            cy.get('[data-cy="city"]').type(userData.city);
            cy.get('[data-cy="uf"]').type(userData.uf);
        })
        
        //routing
        cy.intercept('POST', 'http://localhost:3333/ongs').as('postOng');
        cy.get('[type="submit"]').click();
        //verify if xhr status is 200 (success)
        cy.wait('@postOng').its('response.statusCode').should('eq', 200)
    });

    it('Should be able to login', () => {
        
        const createOngId = Cypress.env('createOngId');
        
        cy.get('input').type(createOngId);

        //routing
        cy.intercept('POST', 'http://localhost:3333/sessions').as('postOng');
        cy.get('.button').click();
        //verify if xhr status is 200 (success)
        cy.wait('@postOng').its('response.statusCode').should('eq', 200)
    });
});
