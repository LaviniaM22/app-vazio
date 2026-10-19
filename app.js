const express = require("express");
const app = express();

const porta = 3000;

// Configurar a pasta de arquivos estáticos (CSS, JS e imagens)
app.use(express.static("./app/public"));

// Configurar o EJS como mecanismo de renderização
app.set("view engine", "ejs");

// Configurar a pasta das views
app.set("views", "./app/views");

// Configurar o envio e a análise de dados das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Requisitar o arquivo de rotas
const rotas = require("./app/routes/router");

// Indicar o local de uso das rotas
app.use("/", rotas);

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
    console.log(`http://localhost:${porta}`);
});