# 📦 Order Management API - Jitterbit Challenge

Este projeto é uma API robusta desenvolvida em **Node.js** para o gerenciamento de pedidos (CRUD). O desafio consistiu em criar um sistema que recebe dados em um formato específico (JSON), realiza o **Data Mapping** para um esquema SQL  e salva as informações de forma segura.

## 🚀 Tecnologias Utilizadas

* **Runtime:** Node.js (v18+)
* **Framework:** Express.js
* **ORM:** Sequelize (Abstração de banco de dados SQL)
* **Database:** SQLite (SQL Dinâmico)
* **Segurança:** JSON Web Token (JWT) e BcryptJS
* **Documentação:** Postman Collection

---

## 🛠️ Estrutura do Projeto

A arquitetura foi pensada seguindo os princípios de **Separação de Responsabilidades (SoC)**:

```text
order-api/
├── src/
│   ├── config/          # Configuração de conexão com o SQLite (Sequelize)
│   ├── controllers/     # Lógica de controle e tratamento de requisições
│   ├── middleware/      # Filtro de autenticação JWT
│   ├── models/          # Definição das tabelas 'Order' e 'Item' (Schemas)
│   ├── routes/          # Definição dos endpoints da API
│   └── app.js           # Inicialização do servidor e sincronização do DB
├── .env                 # Variáveis de ambiente (Segredos e Portas)
├── package.json         # Gerenciamento de dependências e scripts
└── Jitterbit_Challenge.postman_collection.json # Documentação completa

🚀 Como Executar o Projeto
Instale as dependências:

Bash

npm install
Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto com sua string de conexão:

Plaintext

DATABASE_URL=seu_link_sql_aqui
PORT=3000
Inicie o servidor:

Bash

node src/server.js
📍 Endpoints Principais
Criar Pedido

URL: http://localhost:3000/order 


Método: POST 

Body (Exemplo):

JSON

{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [{ "idItem": "2434", "quantidadeItem": 1, "valorItem": 1000 }]
}
Obter Pedido

URL: http://localhost:3000/order/:orderId 


Método: GET
