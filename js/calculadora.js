function realizarOperacoes() {
    // Obtém os valores dos números inseridos
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    // Verifica se os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira dois números válidos.");
    return;
    }

    // Calcula as operações
    let soma = numero1 + numero2;
    let subtracao1 = numero1 - numero2;
    let subtracao2 = numero2 - numero1;
    let produto = numero1 * numero2;
    let divisao = numero2 !== 0 ? numero1 / numero2 : "Não é possível dividir por zero.";
    let quocienteInteiro = numero2 !== 0 ? Math.floor(numero1 / numero2) : "Não aplicável";
    let resto = numero2 !== 0 ? numero1 % numero2 : "Não aplicável";
    let potencia = Math.pow(numero1, numero2);

    // Exibe os resultados na página
    let resultadosHTML = `
    <p><strong>Soma:</strong> ${soma}</p>
    <p><strong>Subtração (primeiro - segundo):</strong> ${subtracao1}</p>
    <p><strong>Subtração (segundo - primeiro):</strong> ${subtracao2}</p>
    <p><strong>Produto:</strong> ${produto}</p>
    <p><strong>Divisão (primeiro / segundo):</strong> ${divisao}</p>
    <p><strong>Quociente inteiro:</strong> ${quocienteInteiro}</p>
    <p><strong>Resto da divisão:</strong> ${resto}</p>
    <p><strong>Potência (primeiro elevado ao segundo):</strong> ${potencia}</p>
    `;

    // Atualiza a área de resultados com os cálculos
    document.getElementById("resultados").innerHTML = resultadosHTML;
}


