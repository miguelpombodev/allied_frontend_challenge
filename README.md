# Allied Frontend

### Instalação e inicialização do projeto

Primeiro de tudo, precisamos instalar o NodeJS e o Yarn.
Abaixo, podemos ir para as páginas de download e instalação das techs utlizadas:

 1. [Node](https://nodejs.org/en/download/)

 2. [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

Após a instalação de todas as tecnologias, podemos dar início à utilização do projeto, com o seguinte código em um prompt (por exemplo cmd, Powershell, bash, etc..)

```sh
yarn install && yarn start
```

Para o gerarmos o relatório de **Coverage** dos teste da aplicação, devemos rodar o seguinte comando:

```sh
yarn jest --coverage --watchAll false
```

### Descrição do projeto

O objetivo do projeto era construir uma aplicação em qualquer tecnologia frontend, por exemplo React, Angular ou Vue. A aplicação deve listar primeiramente todos os dados vindo da API abaixo:

```sh
http://private-59658d-celulardireto2017.apiary-mock.com/plataformas
```

Após o usuário selecionar a opção que queira, ele será redirecionado para um listagem dos respectivos planos da plataforma
escolhida. Os planos vem das seguintes APIs:

```sh
http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01 (tablet)
http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02 (computador)
http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03 (wi-fi)
```

Depois disso, faremos o cadastro do usuário na plataforma, pedindo as seguintes informações: **Nome, E-mail, Nascimento, CPF e Telefone**, e mostraremos todos os dados colhetados no console do navegador.

Depois de cadastrar o usuário, voltamos para a tela inicial, listando todos os usuários salvos.
