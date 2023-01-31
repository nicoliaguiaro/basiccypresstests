/// <reference types="Cypress" />

it('seleciona um arquivo da pasta fixtures', function() {
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })