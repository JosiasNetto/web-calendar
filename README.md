# web-calendar

Este repositório contém um site para gerenciamento de eventos no calendário, permitindo que os usuários cadastrem, visualizem, editem e excluam eventos. O sistema possui autenticação de usuários com login e cadastro.

## Funcionalidades

- Cadastro e login de usuários.
- Permite que cada usuário:
  - Crie eventos.
  - Exclua eventos.
  - Liste seus eventos.
  - Atualize eventos.

## Tecnologias Utilizadas

### Back-end
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Token (JWT)](https://jwt.io/)
- [Zod](https://zod.dev/)

### Front-end
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)

## Como Rodar o Projeto

### Back-end
```sh
# Clone o repositório
git clone https://github.com/JosiasNetto/web-calendar.git

# Acesse a pasta do back-end
cd back-end

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```
### Front-end
- Navegue até a pasta do front-end.

- Abra o arquivo index.html diretamente no navegador ou utilize a extensão Live Server para executá-lo.
