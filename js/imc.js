function calcularIMC() {
    // Obtém os valores de peso e altura inseridos pelo usuário
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores inseridos são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Determina a categoria do IMC
    let categoria;
    if (imc < 18.5) {
    categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
    categoria = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
    categoria = "Obesidade grau 2";
    } else {
    categoria = "Obesidade grau 3";
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = `
    <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
    <p class="categoria"><strong>Categoria:</strong> ${categoria}</p>
    `;
}