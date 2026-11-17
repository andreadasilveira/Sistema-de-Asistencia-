let formulario = document.getElementById("formLogin");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let usu = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    let mensajeError = document.getElementById("error");
    if (usu === "admin" && pass === "admin") {
        localStorage.setItem("sesion", "admin");
        window.location.href = "admin.html";
    } 
    else if (usu === "user" && pass === "user") {
        localStorage.setItem("sesion", "user");
        window.location.href = "user.html";
    } 
    else {
        mensajeError.textContent = "Usuario o contraseña incorrectos";
    }
});