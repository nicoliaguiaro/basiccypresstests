/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    .select('YouTube')
    .should('have.value', 'youtube')
})

it('seleciona um produto (Mentoria) por seu valor (value)', function() {
  cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
})