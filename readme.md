# 🍕 Pizzaria Império

Sistema web desenvolvido para uma pizzaria, permitindo cadastro de clientes, login autenticado e avaliação dos serviços.

## 🚀 Demonstração

### Front-end
https://isack2022.github.io/Pizzaria-Imperio/index.html

### API
https://node-pizzaria.onrender.com

---

## 📸 Funcionalidades

✅ Cadastro de clientes

✅ Login com JWT

✅ Proteção de rotas

✅ Cadastro de avaliações

✅ Avaliação com estrelas (0.5 até 5)

✅ Comentários dos clientes

✅ Integração com MySQL

✅ API REST em Node.js

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express

### Banco de Dados

- MySQL

### Autenticação

- JWT (JSON Web Token)
- Bcrypt

---

## 📂 Estrutura do Projeto

### Front-end

```bash
Pizzaria-Imperio/
│
├── css/
├── js/
├── imagens/
├── index.html
├── login.html
├── avaliacao.html
└── cardapio.html
```

### API

```bash
Node-Pizzaria/
│
├── controller/
├── routes/
├── middlewares/
├── database/
├── app.js
└── server.js
```

---

## 🔐 Autenticação

Após o login a API gera um token JWT.

O token é armazenado no Local Storage:

```javascript
localStorage.setItem("token", dado.token);
```

As rotas protegidas exigem o envio do token:

```javascript
Authorization: Bearer TOKEN
```

---

## 📋 Endpoints

### Cliente

| Método | Rota | Descrição |
|----------|----------|----------|
| GET | /cliente | Lista clientes |
| GET | /cliente/:id | Busca cliente |
| POST | /cliente | Cadastra cliente |
| PUT | /cliente/:id | Atualiza cliente |
| DELETE | /cliente/:id | Remove cliente |
| POST | /cliente/login | Realiza login |

### Avaliações

| Método | Rota | Descrição |
|----------|----------|----------|
| GET | /avaliacao | Lista avaliações |
| GET | /avaliacao/:id | Busca avaliação |
| POST | /avaliacao | Cria avaliação |
| DELETE | /avaliacao/:id | Remove avaliação |

---

## 🗄️ Banco de Dados

Tabela de avaliações:

```sql
CREATE TABLE avaliacao (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    estrela DECIMAL(2,1) NOT NULL,
    comentario TEXT NOT NULL,
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
```

---

## 👨‍💻 Autor


GitHub:
https://github.com/Isack2022

Projeto Front-end:
https://github.com/Isack2022/Pizzaria-Imperio

Projeto API:
https://github.com/Isack2022/Node-Pizzaria