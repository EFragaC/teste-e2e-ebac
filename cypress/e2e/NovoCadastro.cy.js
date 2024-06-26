/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe('NovoCadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });


   
    it('Cadastrar novo usuário com sucesso-Usando Variáveis', () => {

        var email = faker.internet.email()
        var senha = faker.internet.password()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });


    
});