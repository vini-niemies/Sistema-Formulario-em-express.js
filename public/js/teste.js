const form = document.querySelector("#form-idade");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const idadeInput = document.querySelector("#idade").value;
    const idade = Number(idadeInput);

    if (idade === 0) {
        console.log("Idade inválida");
        alert("Idade inválida");
    }

    else if (idade >= 18 && idade > 0) {
        console.log("Maior de idade!");
        alert("Maior de idade!");
    }

    else {
        console.log("Menor de idade!");
        alert("Erro: menor de idade");
    }

}
);