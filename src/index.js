const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

app.post("/validar-idade", (req, res) => {
    const { idade } = req.body;

    if (idade <= 0) {
        return res.json({ mensagem: "Idade inválida" });
    }

    if (idade < 18) {
        return res.json({ mensagem: "Menor de idade" });
    }

    return res.json({ mensagem: "Maior de idade" });

})