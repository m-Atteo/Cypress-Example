/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('[data-cy="name"]').type('Pepe Gatinhos');
        cy.get('[data-cy="email"]').type('pepeGatinhosONG@gmail.com');
        cy.get('[data-cy="whatsapp"]').type('21919919199');
        cy.get('[data-cy="city"]').type('Rio de Janeiro');
        cy.get('[data-cy="uf"]').type('RJ');
        
        //routing
        cy.intercept('POST', 'http://localhost:3333/ongs').as('postOng');
        cy.get('[type="submit"]').click();
        //verify if xhr status is 200 (success)
        cy.wait('@postOng').its('response.statusCode').should('eq', 200)
    });

    it('deve poder realizar um login no sistema', () => {
        
        const createOngId = Cypress.env('createOngId');

        cy.log(createOngId);

        cy.visit('http://localhost:3000/');
        cy.get('input').type(createOngId);

        //routing
        cy.intercept('POST', 'http://localhost:3333/sessions').as('postOng');
        cy.get('.button').click();
        //verify if xhr status is 200 (success)
        cy.wait('@postOng').its('response.statusCode').should('eq', 200)
    });
});