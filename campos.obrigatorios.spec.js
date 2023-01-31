/// <reference types="Cypress" />

it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })