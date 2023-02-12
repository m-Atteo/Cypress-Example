// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createOng", () => {
    cy.fixture('user').then((userData) => {
       // cy.log(userData.);
        cy.request({
            method: 'POST',
            url: 'http://localhost:3333/ongs',
            body: {
                name: userData.name,
                email: userData.email,
                whatsapp :userData.whatsapp,
                city : userData.city,
                uf : userData.uf
            }
        }).then(response => {
            expect(response.body.id).is.not.null;
            cy.log(response.body.id)  
    
            Cypress.env('createOngId', response.body.id)
        });
    });
});
