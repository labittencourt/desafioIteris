#language: pt
  @all-feature
  Funcionalidade: Realizar consulta de CPF no site da Receita Federal
    Como usuario
    Desejo realizar pesquisa de cpf no site da Receita Federal
    Para identificar uma consulta de numero do cpf

    #Cenario feito utilizando dados fixo armazenados no projeto
  @singleTest
  Cenario: Pesquisar cpf sem acionar o captcha do sistema de pesquisa
    Dado que estou visualizando a tela de consulta situacao cadastral no cpf da receita federal
    Quando informo dados validos para realizar a consulta
    E clico no botao Consultar
    Entao o sistema exibe o texto: A validação anti-robô não foi realizada corretamente. Por favor, tente novamente.

    #Cenario feito utilizando a flexibilidade e agilidade do cucumber para manutencao de dados.
  @esquemaTest
  Esquema do Cenario: Pesquisar por cpf validos e nao validos obtendo seus respectivos resultados.
    Dado que estou visualizando a tela de consulta situacao cadastral no cpf da receita federal
    Quando informo <cpf> e <data de nascimento>
    E seleciono o capcha
    E clico no botao Consultar
    Entao o sistema exibe o texto: <mensagem>
    Exemplos: Dados de pesquisa
    |cpf        |data de nascimento |mensagem                                                         |
    |83781070867|18/11/1986         |CPF não encontrado na base de dados da Receita Federal.          |
    |83781070867|18/11/198          |Informe a data de nascimento do titular do CPF a ser consultado  |
    |4791700    |16/07/1986         |Por favor, preencha o CPF a ser consultado                       |
    |25551764890|16/05/1986         |CPF incorreto. Retorne à                                         |