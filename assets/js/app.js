/* Banderas */
var mostrar = false;

/* Elementos */
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuEscondido");

/* Eventos */
btnMenu.addEventListener("click", function() {
    mostrar = !mostrar;
    mostrarMenu();
});
var productos = {
    1: {
        "nombre": "Borderlands 3",
        "descripcion": "Juego",
        "precio": {
            "precioNormal": 700,
            "precioRebaja": 500
        }
    },
    2: {
        "nombre": "Horizon Zero Dawn",
        "descripcion": "Juego",
        "precio": {
            "precioNormal": 500,
            "precioRebaja": 300
        }
    }
}

/* Funciones */

function mostrarMenu() {
    if (mostrar) {
        menu.classList.remove("d-none");
        menu.classList.add("d-flex");
    } else {
        menu.classList.remove("d-flex");
        menu.classList.add("d-none");
    }
}

function mostrarProductos() {
    console.log(productos[2].nombre);
}

window.onload = mostrarProductos();