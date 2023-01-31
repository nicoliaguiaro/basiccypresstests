/// <reference types="Cypress" />
  
    it('preenche os campos obrigatórios e envia o formulário', function() {
      cy.get('#firstName').type('Walmyr')
      cy.get('#lastName').type('Filho')
      cy.get('#email').type('walmyr@exemplo.com')
      cy.get('#open-text-area').type('Teste')
      cy.get('button[type="submit"]').click()
  
      cy.get('.success').should('be.visible')
    })