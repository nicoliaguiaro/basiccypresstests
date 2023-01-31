/// <reference types="Cypress" />

it('envia o formuário com sucesso usando um comando customizado', function() {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })