/// <reference types="Cypress" />

  it('encontra o gato escondido', function() {
    cy.get('#cat')
      .invoke('show')
      .should('be.visible')
    cy.get('#title')
      .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
      .invoke('text', 'Eu 💚 gatos!')
  })