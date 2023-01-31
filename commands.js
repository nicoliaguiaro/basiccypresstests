Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(nome,){
        cy.get('#firstName').type('Nicoli')
        cy.get('#lastName').type('Aguiaro')
        cy.get('#email').type('aguiaronicoli@testes.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button', 'Enviar').click()

})