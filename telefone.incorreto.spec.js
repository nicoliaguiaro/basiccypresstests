/// <reference types="Cypress" />

it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
    cy.get('#phone')
      .type('abcabcabc')
      .should('have.value', '')
  })