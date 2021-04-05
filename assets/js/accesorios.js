/* Banderas */
var mostrar = false;

/* Elementos */
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuEscondido");
var tablaAccesorios = document.getElementById("tablaAccesorios");
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


/* Juegos */

window.onload = function() {
    for (const accesorio in Accesorios) {
        console.log("Vuelta");
        tableData += `
                    <div class="tarjetaProducto">
                        <img src=${Accesorios[accesorio].imagen} alt="${Accesorios[accesorio.nombre]}" class="imagenProducto">
                        <div class="detallesProducto">
                            <h3>${Accesorios[accesorio].nombre}</h3>
                            <p class="descripcionProducto">${Accesorios[accesorio].descripcion}</p>
                            <p class="precioProducto">Precio: <span>${Accesorios[accesorio].precio}</span></p>
                            <a href="#" class="btnComprar">Añadir al carrito</a>
                        </div>
                    </div>
                    `;

        tablaAccesorios.innerHTML = tableData;
    }
};

var Accesorios = {
    1: {
        "id": "1",
        "nombre": "DualSense (PS5)",
        "descripcion": "El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva, gatillos adaptativos dinámicos y un micrófono integrado, todo en un diseño icónico.",
        "precio": "$1,699 MXN",
        "imagen": "assets/img/controlPs5.jpeg"
    },
    2: {
        "id": "2",
        "nombre": "Control inalámbrico Xbox",
        "descripcion": "Textura antiderrapante I Asignación de botones I Conector para auriculares estéreo de 3,5 mm I Tecnología Bluetooth®",
        "precio": "$1,399 MXN",
        "imagen": "assets/img/controlXbox.webp"
    }
}