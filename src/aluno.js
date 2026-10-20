import conexao from "./banco.js"; // importando a conexão com BD.

// Função ler: vai ler os alunos do banco de dados (no momento inicial não temos nenhum);
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";
    conexao.query(sql, (erro, resultados) => {
        // Verificando se há erro, e caso positivo define o status para 400 (Bad request)
        // e apresenta o código do erro no formato json.
        if (erro) {
            res.status(400).json(erro.code);
            return;
        }

        // Verifica se tem registros no banco de dados, caso não tenha, define para 204 (sem conteúdo).
        if (resultados === 0) {
            res.status(204).end()
            return
        }

        // Define o status como 200 (OK) e exibe os resultados.
        res.status(200).json(resultados);
    });
}

export { ler };