/* Banderas */
var mostrar = false;

/* Elementos */
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuEscondido");
var tablaConsolas = document.getElementById("tablaConsolas");
var tableData = ``;

/* Eventos */
btnMenu.addEventListener("click", function() {
    mostrar = !mostrar;
    mostrarMenu();
});

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


//window.onload = mostrarProductos();


/* CONSOLAS */

window.onload = cargarConsolas();

var consolas = {
    1: {
        "nombre": "Playstation 5",
        "descripcion": "Experimenta una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation®.",
        "precio": "$13.999 MXN",
        "imagen": "assets/img/ps5.jpg"
    },
    2: {
        "nombre": "Xbox Series X",
        "descripcion": "La Xbox más rápida y más potente de la historia.",
        "precio": "$13.999 MXN",
        "imagen": "assets/img/seriesx.jpg"
    },
    3: {
        "nombre": "Nintendo Switch",
        "descripcion": "La consola Nintendo Switch está diseñada para cualquier estilo de vida, transformándose rápidamente de una consola casera a una consola portátil.",
        "precio": "$7.999 MXN",
        "imagen": "assets/img/switch.jpg"
    }
}

function cargarConsolas() {
    for (const consola in consolas) {
        console.log("Vuelta");
        tableData += `
                    <div>
                        <img src=${consolas[consola].imagen} alt="${consolas[consola.nombre]}">
                        <h3>${consolas[consola].nombre}</h3>
                        <p>${consolas[consola].descripcion}</p>
                        <p>Precio: ${consolas[consola].precio}</p>
                    </div>
                    `;

        tablaConsolas.innerHTML = tableData;
    }
}