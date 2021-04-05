/* Banderas */
var mostrar = false;

/* Elementos */
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuEscondido");
var tablaJuegos = document.getElementById("tablaJuegos");
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
    for (const juego in juegos) {
        console.log("Vuelta");
        tableData += `
                    <div class="tarjetaProducto">
                        <img src=${juegos[juego].imagen} alt="${juegos[juego.nombre]}" class="imagenProducto">
                        <div class="detallesProducto">
                            <h3>${juegos[juego].nombre}</h3>
                            <p class="descripcionProducto">${juegos[juego].descripcion}</p>
                            <p class="precioProducto">Precio: <span>${juegos[juego].precio}</span></p>
                            <a href="#" class="btnComprar">Añadir al carrito</a>
                        </div>
                    </div>
                    `;

        tablaJuegos.innerHTML = tableData;
    }
};

var juegos = {
    1: {
        "id": "1",
        "nombre": "Assassin´s Creed Valhalla",
        "descripcion": "En el año 873 d.c., la guerra y el hacinamiento llevaron a Eivor a liderar a su clan de vikingos para que abandonaran Noruega.  Se instalan en la Inglaterra medieval como parte de la expansión vikinga en toda Europa. Esto los pone en conflicto con los reinos anglosajones de Wessex Northumbria, Estanglia y Mercia.  El clan de Eivor enfrentará fuerzas lideradas por los líderes de estos reinos, incluido Alfredo el Grande, el rey de Wessex. Es durante este tiempo que Eivor se encuentra con los Ocultos y se une a su lucha contra la Orden de los Antiguos.",
        "precio": "$1,599 MXN",
        "imagen": "assets/img/valhalla.jpg"
    },
    2: {
        "id": "2",
        "nombre": "Borderlands 3",
        "descripcion": "¡El juego original de disparos y saqueos está de regreso! ¡Y viene repleto de armas y aventuras caóticas! Enfréntate a mundos y enemigos nuevos y salva tu hogar de los líderes de la secta más cruel de la galaxia.",
        "precio": "$1,699 MXN",
        "imagen": "assets/img/borderlands3.jpg"
    },
    3: {
        "id": "3",
        "nombre": "Horizon Zero Dawn",
        "descripcion": "Horizon Zero Dawn se proyecta en el planeta Tierra aproximadamente 1000 años en el futuro, más precisamente al año 3040, en un escenario post-apocalíptico donde los seres humanos han vuelto a la época de las sociedades tribales primitivas como resultado de una catástrofe desconocida. Con el paso del tiempo, estas tribus adoptaron diferentes costumbres, tradiciones, intereses y creencias.",
        "precio": "$499 MXN",
        "imagen": "assets/img/horizon.jpg"
    },
    4: {
        "id": "4",
        "nombre": "Ghost of Tsushima",
        "descripcion": "A finales del siglo XIII, el Imperio mongol asola naciones enteras en su conquista del Este. La isla de Tsushima es todo lo que se interpone entre las islas principales de Japón y una invasión mongola masiva. Mientras la isla arde tras el asalto mongol, el guerrero samurái Jin Sakai hará lo que sea para proteger a su gente y recuperar su hogar.",
        "precio": "$1,199 MXN",
        "imagen": "assets/img/got.jpg"
    },
    5: {
        "id": "5",
        "nombre": "Spiderman Miles Morales",
        "descripcion": "En la última aventura del universo de Spider-Man de Marvel, el adolescente Miles Morales intenta ajustarse a su nuevo hogar mientras que sigue los pasos de su mentor, Peter Parker, para convertirse en el nuevo Spider-Man.",
        "precio": "$1,399 MXN",
        "imagen": "assets/img/spiderman.jpg"
    }
}