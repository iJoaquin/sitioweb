// Seleccionamos todos los enlaces que necesitamos (header y offcanvas)
const Enlaces = document.querySelectorAll('#barra_header li, #menu_hamburguesa .nav-link');
console.log(Enlaces);

const Seccion_Intro = document.getElementById("seccion_intro");
const Seccion_Proyectos = document.getElementById("seccion_proyectos");
const Seccion_Certificados = document.getElementById("seccion_certificados");
const Seccion_SobreMi = document.getElementById("seccion_sobremi");

function mostrarSeccion(seccion) {
    Seccion_Intro.style.display = "none";
    Seccion_Proyectos.style.display = "none";
    Seccion_Certificados.style.display = "none";
    Seccion_SobreMi.style.display = "none";

    if (seccion) {
        seccion.style.display = "block";
    }
}

Enlaces.forEach(enlace => {
    enlace.addEventListener("click", function (event) {
        event.preventDefault(); 
        const texto = enlace.textContent.toLowerCase();

        if (texto === "inicio") {
            mostrarSeccion(Seccion_Intro);

        } else if (texto === "proyectos") {
            mostrarSeccion(Seccion_Proyectos);

        } else if (texto === "certificados") {
            mostrarSeccion(Seccion_Certificados);

        } else if (texto === "sobre mi") {
            mostrarSeccion(Seccion_SobreMi);
        }

        const offcanvas = document.querySelector('.offcanvas.show');
        if (offcanvas) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
            // Si el menu hamburguesa esta abierto, lo cerramos
            bsOffcanvas.hide();
        }
    });
});