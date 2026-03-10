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
