/// <reference types="Cypress" />

it('seleciona um arquivo simulando um drag-and-drop', function() {
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })