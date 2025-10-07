// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('visitHomepage', () => {
  cy.visit('/')
  cy.get('body').then(($body) => {
    if ($body.find('#sp-cc-accept').length > 0) {
      cy.get('#sp-cc-accept').click()
    }
  })
})
