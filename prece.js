let alumnos = ["Piccini Ziomara", "Da Silveira Andrea", "Fernandez Martin" , "Salazar Camila", "Pessini Benjamin", "Vera Mia", "Barrios Dulce"];
let asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
let contenedor = document.getElementById("cajaAlumnos");
for (let i = 0; i < alumnos.length; i++) {
    let nombreAlumno = alumnos[i];
    let fila = document.createElement("div");
    fila.className = "fila";
    let texto = document.createElement("span");
    texto.textContent = nombreAlumno; 
    let divOpciones = document.createElement("div");
    let checkPresente = document.createElement("input");
    checkPresente.type = "checkbox";
    checkPresente.checked = (asistencias[nombreAlumno] === "Presente");
    let labelPresente = document.createElement("label");
    labelPresente.textContent = " Presente ";
    let checkAusente = document.createElement("input");
    checkAusente.type = "checkbox";
    checkAusente.checked = (asistencias[nombreAlumno] === "Ausente");
    let labelAusente = document.createElement("label");
    labelAusente.textContent = " Ausente";
    checkPresente.onclick = function() {
        if (checkPresente.checked) {
            checkAusente.checked = false;
            asistencias[nombreAlumno] = "Presente";
        } else {
            asistencias[nombreAlumno] = "";
        }
        localStorage.setItem("asistencias", JSON.stringify(asistencias));
    };
    checkAusente.onclick = function() {
        if (checkAusente.checked) {
            checkPresente.checked = false;
            asistencias[nombreAlumno] = "Ausente";
        } else {
            asistencias[nombreAlumno] = "";
        }
        localStorage.setItem("asistencias", JSON.stringify(asistencias));
    };
    divOpciones.appendChild(checkPresente);
    divOpciones.appendChild(labelPresente);
    divOpciones.appendChild(checkAusente);
    divOpciones.appendChild(labelAusente);
    fila.appendChild(texto);
    fila.appendChild(divOpciones);
    contenedor.appendChild(fila);
}
