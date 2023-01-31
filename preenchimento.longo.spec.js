/// <reference types="Cypress" />

it('preenche os campos obrigatórios e envia o formulário', function() {
    const longText = 'Teste, teste, teste, teste, teste, teste, teste'

    cy.get('#firstName').type('Walmyr')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('walmyr@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
})