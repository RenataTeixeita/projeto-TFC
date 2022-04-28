# Boas vindas ao repositório do TFC - Trybe Futebol Clube! ⚽️

O TFC é um site informativo sobre partidas e classificações de futebol!

Neste projeto desenvolvi a API em `Node.js + Typescript` usando o pacote `sequelize` e também fiz a integração - através do docker-compose - das aplicações para que funcionem consumindo um banco de dados.

Os principais pontos de desenvolvimento foram:

 - Realizar a dockerização dos apps, network, volume e compose;
 
 
 - Modelar dados com **MySQL** através do **Sequelize**;
 
 - Criar e associar tabelas usando `models` do `sequelize`;
 
 - Construir uma **API REST** com endpoints para consumir os models criados;
 
 - Aplicar os princípios `SOLID`;
 
 - Fazer um `CRUD` utilizando `ORM`;

---

# Instruções para rodar o projeto:

1. Clone o repositório
  * `git clone https://git@github.com:RenataTeixeita/projeto-pessoal-TFC.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd projeto-pessoal-TFC`

2. Instale as dependências (é necessário rodar comando tanto no back end quanto no front end)
  * `npm install`
  
3. Utilize os scripts de apoio `npm run compose:up` / `npm run compose:down`, para facilitar a execução do docker-compose (ao alterar qualquer coisa no código será necessário subir o docker novamente, para isso faça o `npm run compose:down` e na seqquência o `npm run compose:up`).

4. Certifique-se que as portas 3000 e 3001 não estão sendo utilizadas. Na sequência (nesta ordem) no back end use o comando `npm start`, espere o banco carregar e rode o mesmo comando no front end em outro terminal. Assim você testa a aplicação.

---
## Configurações necessárias para estabelecer a conexão com o banco

#### Variáveis de ambiente

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

Você precisará alterar o nome  do arquivo `.env.exemple` para `.env` e configurá-lo com seus dados de usuário e senha do MySQL (siga as configurações abaixo).
```
PORT=3001
DB_USER=coloqueAquiSeuUser
DB_PASS=coloqueAquiSeuPassword
DB_HOST=localhost
DB_NAME=TRYBE_FUTEBOL_CLUBE
DB_PORT=3306

```


#### Chave JWT e criptografia de senhas:

⚠️ A sua chave `JWT` deve ser inserida em `app/backend/jwt.evaluation.key`.

⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs).


---

## Configuração Docker-compose:

⚠ O seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/) ⚠
