// Importando o express (instalado via terminal)
import express from "express";
const app = express();
const porta = 3000;

// ROTAS
// Configurando rota para o inicio da aplicação
app.get("/", (req, res) => {
    res.send("API de alunos com nodeJS, express e MySQL");
});

// ROTA para visualiar TODOS os alunos 
app.get("/alunos", (req, res) => {
    res.send("Dados de todos os alunos");
});

// ROTA/Endpoint para visualizar UM aluno
app.get("/alunos/:id", (req, res) => {
    res.send("Dados de um aluno qualquer");
});

// Endpoint para INSERIR UM aluno no banco de dados
app.post("/alunos", (req, res) => {
    res.send("Cadastrando um aluno.");
});

// Endpoint para ATUALIZAR TODOS OS DADOS de UM aluno
app.put("/alunos/:id", (req, res) => {
    res.send("ATUALIZAR TODOS OS DADOS de UM aluno");
});

// Endpoint para ATUALIZAR ALGUNS OS DADOS de UM aluno
app.patch("/alunos/:id", (req, res) => {
    res.send("ATUALIZAR ALGUNS OS DADOS de UM aluno");
});

// Endpoint para DELETAR UM aluno
app.delete("/alunos/:id", (req, res) => {
    res.send("DELETAR UM aluno");
});

// SERVIDOR
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});