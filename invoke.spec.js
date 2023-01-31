/// <reference types="Cypress" />

it('acessa a página da política de privacidade removendo o target e então clicanco no link', function() {
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('Talking About Testing').should('be.visible')
  })