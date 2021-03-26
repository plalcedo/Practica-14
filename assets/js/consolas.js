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

window.onload = function() {
    for (const consola in consolas) {
        console.log("Vuelta");
        tableData += `
                    <div class="tarjetaProducto">
                        <img src=${consolas[consola].imagen} alt="${consolas[consola.nombre]}" class="imagenProducto">
                        <div class="detallesProducto">
                            <h3>${consolas[consola].nombre}</h3>
                            <p class="descripcionProducto">${consolas[consola].descripcion}</p>
                            <p class="precioProducto">Precio: <span>${consolas[consola].precio}</span></p>
                            <a href="#" class="btnComprar">¡Comprar ya!</a>
                        </div>
                    </div>
                    `;

        tablaConsolas.innerHTML = tableData;
    }
};

var consolas = {
    1: {
        "nombre": "Playstation 5",
        "descripcion": "Experimenta una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation®.",
        "precio": "$13,999 MXN",
        "imagen": "assets/img/ps5.jpg",
        "id": "ps5"
    },
    2: {
        "nombre": "Xbox Series X",
        "descripcion": "La Xbox más rápida y más potente de la historia.",
        "precio": "$13,999 MXN",
        "imagen": "assets/img/seriesx.jpg",
        "id": "xboxseriesx"
    },
    3: {
        "nombre": "Nintendo Switch",
        "descripcion": "La consola Nintendo Switch está diseñada para cualquier estilo de vida, transformándose rápidamente de una consola casera a una consola portátil.",
        "precio": "$7,999 MXN",
        "imagen": "assets/img/switch.jpg",
        "id": "switch"
    }
}


/* Creando imágenes como botones */