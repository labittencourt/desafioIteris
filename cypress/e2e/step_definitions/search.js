/// <reference types="cypress"/>
import { Given, When, Then,  } from "@badeball/cypress-cucumber-preprocessor"
import Search from '../../support/pages/search'

Given(/^que estou visualizando a tela de consulta situacao cadastral no cpf da receita federal$/, () => {
    Search.accessToSearchCPFPage()
});
When(/^informo dados validos para realizar a consulta$/, () => {
    Search.fillInCPFField()
    Search.fillInBithDateField()
});
When(/^seleciono o capcha$/, () => {
    Search.clickOnCaptchaCheckBox()
});
When(/^clico no botao Consultar$/, () => {
    Search.clickOnBtnSubmit()
});
When(/^informo (.*) e (.*)$/, (cpf, birthDate) => {
    Search.fillInCPFFieldV2(cpf)
    Search.fillInBirthDateFieldV2(birthDate)
});
Then(/^o sistema exibe o texto: (.*)$/, (mensagem) => {
    Search.checkMensagem(mensagem).should('be.visible')
});