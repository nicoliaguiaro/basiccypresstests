/// <reference types="Cypress" />

it('seleciona um produto (Blog) por seu índice', function() {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })