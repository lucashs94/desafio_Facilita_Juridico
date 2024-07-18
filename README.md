

<h1 align="center"> 
	Desafio - Desenvolvedor Facilita Jurídico
</h1>
<br>


## ⚙️ Backend

💡O backend foi desenvolvido com **NODE**, **EXPRESS** e **POSTGRESQL**.

💡O banco postgres foi criando usando docker e docker-compose.
 
💡O DDL encontra-se na pasta backend/src/database/migrations

---

### Executando o backend


 
**Clone este repositório**

```bash
git clone https://github.com/lucashs94/desafio_Facilita_Juridico.git
```
 
**Acesse a pasta do backend**

```bash
cd backend
```
 
**Instale as dependências**

```bash
npm install
```
 
**Altere o arquivo .env.example para .env e mude as variaveis, caso deseje**
```bash
cp .env.example .env
```
 
**Usando docker compose, vamos levantar o container do postgres**
```bash
docker compose up -d
```
 
**Com o banco criado, vamos rodar a migration da tabela**
```bash
npm run migrate
```
 
**Caso deseje, rode o comando abaixo para popular a tabela com 10 registros**
```bash
npm run seed
```
 
**Está tudo pronto, vamos rodar o servidor na porta 3333 ou na porta do arquivo .env**
```bash
npm run dev
```

---
<br>

## 🎨 Frontend

💡O frontend foi desenvolvido com **REACT**, **VITE**, **SHADCN-UI** e **TAILWIND**.

---

### Executando o frontend

**Com o repositorio clonado anteriormente, acesse a pasta do frontend**

```bash
cd .. && cd frontend
```

**Instale as dependencias**

```bash
npm install
```
 
**Altere o arquivo .env.example para .env e mude as variaveis, caso deseje**
```bash
cp .env.example .env
```
 
**Está tudo pronto, vamos rodar o frontend**
```bash
npm run dev
```
 
**Acesse o frontend em**
```bash
http://localhost:5173
```
---
<br>

## 🦸 Autor

<a href="https://lucassilva.me">
 <img style="border-radius: 50%;" src="https://github.com/lucashs94.png" width="100px;" alt=""/>
 <br />
<!--  <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago/" title="Rocketseat">🚀</a> -->
 <br />

<!---[![Twitter Badge](https://img.shields.io/badge/-@tgmarinho-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/tgmarinho)](https://twitter.com/tgmarinho) -->
[![Linkedin Badge](https://img.shields.io/badge/-Lucas_Silva-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucashs94/)](https://www.linkedin.com/in/lucashs94/) <br>
[![Gmail Badge](https://img.shields.io/badge/-h7.lucas@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:h7.lucas@gmail.com)](mailto:h7.lucas@gmail.com)
