// JavaScript para validación de formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("Formulario enviado exitosamente.");
        form.reset();
    });
});
