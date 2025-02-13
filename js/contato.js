document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        document.getElementById("res-nome").textContent = document.getElementById("nome").value;
        document.getElementById("res-email").textContent = document.getElementById("email").value;
        document.getElementById("res-telefone").textContent = document.getElementById("telefone").value;
        document.getElementById("res-mensagem").textContent = document.getElementById("mensagem").value;
        
        resultado.style.display = "block";
    });
});

        

