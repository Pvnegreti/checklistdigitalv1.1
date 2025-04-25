const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(bodyParser.json());

// Rota para receber o POST do formulário de registro
app.post('/register', (req, res) => {
    const { usernameCriador, passwordCriador, newUsername, newPassword, userLevel } = req.body;

    // Validação simples do usuário criador (exemplo)
    if (usernameCriador === 'admin' && passwordCriador === 'admin') {
        // Aqui você pode adicionar a lógica para salvar o novo usuário no banco de dados

        console.log(`Usuário criado: ${newUsername} com nível ${userLevel}`);

        res.json({ success: true, message: 'Usuário registrado com sucesso!' });
    } else {
        res.json({ success: false, message: 'Usuário criador não identificado ou senha incorreta.' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
