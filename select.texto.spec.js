/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', function() {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })