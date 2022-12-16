
// No diretorio pages/search/index.js -Como esta aqui - ficam as funcoes da pagina
// Se houvesse uma outra pasta exemplo: pages/home/index.js - ficaria apenas as funcoes daquela pagina, podendo se necessario
// reutilizacao em outras telas.
const data = require('../../constants/dataInfo').DATATESTS // importando dados e constantes
const el = require('./elements').ELEMENTS  // importando os elementos

// const Client = require('@infosimples/node_two_captcha') // lib usanda na funcao testeCaptcha()

class Search {
    accessToSearchCPFPage() {
        cy.visit(data.searchPage)
        this.uncaughtExceptionSystem()
    }

    fillInCPFField() {
        cy.get(el.cpf_field)
            .click()
            .type(data.valid_cpf)
    }

    fillInBithDateField() {
        cy.get(el.birth_date_field)
            .click()
            .type(data.birth_date)
    }

    fillInCPFFieldV2(cpf) {
        cy.get(el.cpf_field)
            .click()
            .type(cpf)
    }

    fillInBirthDateFieldV2(birthDate) {
        cy.get(el.birth_date_field)
            .click()
            .type(birthDate)
    }

    clickOnCaptchaCheckBox() {
        cy.get('iframe')
            .first()
            .then((recaptchaIframe) => {
                const body = recaptchaIframe.contents()
                cy.wrap(body).find(el.captcha_checkbox).should('be.visible').click()
            })
        cy.get(el.imagem_check).find('img').should('have.attr', 'src')
    }

    clickOnBtnSubmit() {
        cy.get(el.btn_submit)
            .click()
    }

    checkMensagem(messagem) {
        return cy.contains(`${messagem}`)
    }

    // esta funcao foi necessaria, pq a pagina tinha uma exception que falhava os testes.
    uncaughtExceptionSystem() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    // Deixei esta funcao com intuito de mostrar o estudo que fiz para tentar validar o captcha
    // testeCaptcha() {
    //    const client = new Client('bba37e8434a66399363b108ff047d121', {
    //        timeout: 60000,
    //        polling: 5000,
    //        throwErrors: false
    //    });
    //     client.decode({
    //         url: 'https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp'
    //     }).then(function(response) {
    //         console.log(response.text);
    //     });
    // }
}
export default new Search()