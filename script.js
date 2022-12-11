const texto = document.getElementById("texto");
let valor1 = 10;
let valor2 = 15;

function somar() {
    resSoma = valor1 + valor2;
    return resSoma;
}

texto.innerText = somar();