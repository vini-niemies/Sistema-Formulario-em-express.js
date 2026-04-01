const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

app.post("/validar-idade", (req, res) => {

    console.log("teste de rota");

    const { idade } = req.body;

    if (idade <= 0) {
        return res.json({ mensagem: "Idade inválida" });
    }

    if (idade < 18) {
        return res.json({ mensagem: "Menor de idade" });
    }

    return res.json({ mensagem: "Maior de idade" });

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});