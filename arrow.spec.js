/// <reference types="Cypress" />

it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() {
      cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
    }})