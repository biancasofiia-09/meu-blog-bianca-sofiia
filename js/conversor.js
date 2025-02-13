function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let unidadeOriginal = document.getElementById("unidadeOriginal").value;
    let unidadeConvertida = document.getElementById("unidadeConvertida").value;
    
    // Verifica se o valor foi inserido corretamente
    if (isNaN(valor)) {
    alert("Por favor, insira um valor válido.");
    return;
    }

    // Converte o valor para metros, independentemente da unidade original
    let valorEmMetros;
    switch (unidadeOriginal) {
    case "quilometros":
        valorEmMetros = valor * 1000;
        break;
    case "centimetros":
        valorEmMetros = valor / 100;
        break;
    case "milimetros":
        valorEmMetros = valor / 1000;
        break;
    case "metros":
    default:
        valorEmMetros = valor;
        break;
    }

    // Converte o valor em metros para a unidade de destino
    let resultado;
    switch (unidadeConvertida) {
    case "quilometros":
        resultado = valorEmMetros / 1000;
        break;
    case "centimetros":
        resultado = valorEmMetros * 100;
        break;
    case "milimetros":
        resultado = valorEmMetros * 1000;
        break;
    case "metros":
    default:
        resultado = valorEmMetros;
        break;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = `
    <p><strong>Resultado:</strong> ${resultado} ${unidadeConvertida}</p>
    `;
}