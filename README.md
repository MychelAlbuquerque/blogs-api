# Blogs API :page_with_curl: :computer:

Uma API para um sistema de gerenciamento de estoque e vendas. Sendo possível realizar leitura, cadastro, alterações, e deletar dados. Como banco de dados, foi utilizado o MySql e toda estruturação da aplicação seguiu a arquiterura de software MSC, model-service-controller.

## :computer: Tecnologias utilizadas:

- Node JS
- Express 
- Docker
- MySQL
- Json Web Token JWT
- Mocha
- Chai
- Sinon

## :hammer_and_wrench: Como executar 

Primeiro, será necessaŕio efetuar o clone do repositório. Execute o comando:

```bash
git clone git@github.com:MychelAlbuquerque/blogs-api.git
```

Depois, acesse a pasta para onde o repositório foi clonado e execute o docker compose:
```bash
docker-compose up -d
```
Esse comando criará os containers da aplicação e também do banco de dados. 

Acesse o terminal do container docker que está rodando a aplicação:
```bash
docker exec -it blogs_api bash
```

Instale as dependências:
```bash
npm install
```
Agora é só subir o servidor:
```bash
npm start
```
#### :green_circle: Tudo pronto! A API estará rodando na porta 3000 e o banco de dados MySql na porta 3306.

## :electric_plug: Endpoints:

- POST **/user**  :arrow_right:  Realiza o cadastro de um usuário.
O payload deve ter o seguinte formato:
```bash
{
  "displayName": "Nome",
  "email": "email@email.com",
  "password": "123456" 
}
```
Ao finalizar o cadastro a API retorna um token de autenticação JWT, similar a este:
```bash
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQnJldHQgV2lsdGhpcmUiLCJpYXQiOjE2ODAxMDI3MDB9.04ENa4A_BgSBEO44kgU5OJiAXWhkD-rigrltiilhkJM"
}
```
- GET **/user**  :arrow_right:  retorna todos os usuários cadastrados.

- GET **/user/:id**  :arrow_right:  retorna o usuário correspondente ao Id informado.

- POST **/login**  :arrow_right:  Efetua o login com os dados de um usuário já cadastrado.
O payload deve ter o seguinte formato:
```bash
{
  "displayName": "Nome",
  "email": "email@email.com"
}
```
Ao realizar o login com sucesso a API também retorna um token JWT.

- POST **/categories**  :arrow_right:  Cadastra uma nova categoria de Posts no Blog.
O payload deve ter o seguinte formato:
```bash
{
  "name": "Nome da categoria"
}
```
Ao realizar a requisição é necessário informar um tokem válido. Na seção Headers >> Authorization.

... README Em construção ...
