# 🚗 CAR CRUD - FULL STACK API

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🛠️ TECNOLOGIAS UTILIZADAS

* **Backend:** Node.js + Express
* **Bancos de Dados:** MySQL & MongoDB
* **Containerização:** Docker & Docker Compose
* **Ambiente:** Nodemon (Hot-reload)

---

## 🚀 COMO RODAR O PROJETO

### 1. Clonar o Repositório
Abra no seu terminal execute os comandos abaixo:

```bash
git clone https://github.com/DanteZzzy/crud_cars.git
cd crud_cars
```
### 2. Configurar Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e cole estas configurações:

```bash
# Configurações de conexão (Altere conforme seu ambiente)
MONGO_URI=mongodb://127.0.0.1:27019/loja_de_carros
MYSQL_PORT=3307
MYSQL_HOST=127.0.0.1
MYSQL_USER=seu_usuario
MYSQL_PASSWORD=sua_senha
MYSQL_DATABASE=loja_de_carros
```

### 3. Subir os Bancos (Docker)
No terminal, dentro da pasta do projeto, execute:

```bash
docker-compose up -d
```

### 4. Instalar e Rodar a API
Agora, instale as dependências do Node e inicie o servidor:

```bash
npm install
npm run dev
```

### 📡 ENDPOINTS DA API
Teste as rotas utilizando o Thunder Client ou Postman:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/cars` | Retorna a lista de todos os veículos cadastrados. |
| `POST` | `/cars` | Cadastra um novo veículo enviando os dados no corpo. |
| `GET` | `/cars/:id` | Busca os detalhes de um veículo específico pelo ID. |
| `PUT` | `/cars/:id` | Atualiza as informações de um veículo existente. |
| `DELETE` | `/cars/:id` | Remove permanentemente um veículo do banco. |

---

### 📝 EXEMPLO DE CADASTRO (POST)

```json
{
  "nome": "Civic",
  "marca": "Honda",
  "ano": 2024,
  "cor": "Preto"
}
```

### 🎓 AUTOR
 Gabriel Teixeira de Faria - Engenharia de Software.