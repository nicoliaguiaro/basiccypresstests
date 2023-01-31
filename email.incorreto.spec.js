/// <reference types="Cypress" />

it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#firstName').type('Walmyr')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('walmyr@exemplo,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })