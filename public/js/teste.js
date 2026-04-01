console.log("JS carregou");

const form = document.querySelector("#form-idade");
console.log("form encontrado", form);

form.addEventListener("submit", async function (event) {
    console.log("teste submit");
    event.preventDefault();

    const idadeInput = document.querySelector("#idade").value;
    const idade = Number(idadeInput);

    if (!idade) {
        alert("Idade inválida");
        return;
    }

    try {
        console.log("Teste antes fetch");
        const resposta = await fetch("http://localhost:3000/validar-idade", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idade })
        });

        console.log("Teste depois fetch");

        const dados = await resposta.json();

        alert(dados.mensagem);

    } catch (erro) {
        console.error("Erro ao conectar com o servidor", erro);
        alert("Erro no servidor");
    }
});
