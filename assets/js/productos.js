/* Banderas */
var mostrar = false;

/* Elementos */
var btnMenu = document.getElementById("btnMenu");
var menu = document.getElementById("menuEscondido");
var tablaJuegos = document.getElementById("tablaJuegos");
var tableDataJuegos = ``;
var tablaConsolas = document.getElementById("tablaConsolas");
var tableDataConsolas = ``;
var tablaAccesorios = document.getElementById("tablaAccesorios");
var tableDataAccesorios = ``;
var tablaCarrito = document.getElementById("tablaCarrito");
var tableDataCarrito = ``;
var cantidadCarrito = document.getElementById("cantidadCarrito");
var botonVaciarCarrito = document.getElementById("btnVaciar");
var precioCarrito = document.getElementById("precioTotal");
var mensajeEscondido = document.getElementById("mensajeAdd");

/* Variables */

var cart = [];

var localStorageKeyName = 'productos';


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

/* Catálogo */

var juegos = {
    1: {
        "id": "1",
        "nombre": "Assassin´s Creed Valhalla",
        "descripcion": "En el año 873 d.c., la guerra y el hacinamiento llevaron a Eivor a liderar a su clan de vikingos para que abandonaran Noruega.  Se instalan en la Inglaterra medieval como parte de la expansión vikinga en toda Europa. Esto los pone en conflicto con los reinos anglosajones de Wessex Northumbria, Estanglia y Mercia.  El clan de Eivor enfrentará fuerzas lideradas por los líderes de estos reinos, incluido Alfredo el Grande, el rey de Wessex. Es durante este tiempo que Eivor se encuentra con los Ocultos y se une a su lucha contra la Orden de los Antiguos.",
        "precio": "$1,599 MXN",
        "imagen": "assets/img/valhalla.jpg",
        "precioNum": 1599
    },
    2: {
        "id": "2",
        "nombre": "Borderlands 3",
        "descripcion": "¡El juego original de disparos y saqueos está de regreso! ¡Y viene repleto de armas y aventuras caóticas! Enfréntate a mundos y enemigos nuevos y salva tu hogar de los líderes de la secta más cruel de la galaxia.",
        "precio": "$1,699 MXN",
        "imagen": "assets/img/borderlands3.jpg",
        "precioNum": 1699
    },
    3: {
        "id": "3",
        "nombre": "Horizon Zero Dawn",
        "descripcion": "Horizon Zero Dawn se proyecta en el planeta Tierra aproximadamente 1000 años en el futuro, más precisamente al año 3040, en un escenario post-apocalíptico donde los seres humanos han vuelto a la época de las sociedades tribales primitivas como resultado de una catástrofe desconocida. Con el paso del tiempo, estas tribus adoptaron diferentes costumbres, tradiciones, intereses y creencias.",
        "precio": "$499 MXN",
        "imagen": "assets/img/horizon.jpg",
        "precioNum": 499
    },
    4: {
        "id": "4",
        "nombre": "Ghost of Tsushima",
        "descripcion": "A finales del siglo XIII, el Imperio mongol asola naciones enteras en su conquista del Este. La isla de Tsushima es todo lo que se interpone entre las islas principales de Japón y una invasión mongola masiva. Mientras la isla arde tras el asalto mongol, el guerrero samurái Jin Sakai hará lo que sea para proteger a su gente y recuperar su hogar.",
        "precio": "$1,199 MXN",
        "imagen": "assets/img/got.jpg",
        "precioNum": 1199
    },
    5: {
        "id": "5",
        "nombre": "Spiderman Miles Morales",
        "descripcion": "En la última aventura del universo de Spider-Man de Marvel, el adolescente Miles Morales intenta ajustarse a su nuevo hogar mientras que sigue los pasos de su mentor, Peter Parker, para convertirse en el nuevo Spider-Man.",
        "precio": "$1,399 MXN",
        "imagen": "assets/img/spiderman.jpg",
        "precioNum": 1399
    }
}

var consolas = {
    6: {
        "id": "6",
        "nombre": "Playstation 5",
        "descripcion": "Experimenta una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation®.",
        "precio": "$13,999 MXN",
        "imagen": "assets/img/ps5.jpg",
        "precioNum": 13999
    },
    7: {
        "id": "7",
        "nombre": "Xbox Series X",
        "descripcion": "La Xbox más rápida y más potente de la historia.",
        "precio": "$13,999 MXN",
        "imagen": "assets/img/seriesx.jpg",
        "precioNum": 13999
    },
    8: {
        "id": "8",
        "nombre": "Nintendo Switch",
        "descripcion": "La consola Nintendo Switch está diseñada para cualquier estilo de vida, transformándose rápidamente de una consola casera a una consola portátil.",
        "precio": "$7,999 MXN",
        "imagen": "assets/img/switch.jpg",
        "precioNum": 7999
    }
}

var accesorios = {
    9: {
        "id": "9",
        "nombre": "DualSense (PS5)",
        "descripcion": "El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva, gatillos adaptativos dinámicos y un micrófono integrado, todo en un diseño icónico.",
        "precio": "$1,699 MXN",
        "imagen": "assets/img/controlPs5.jpeg",
        "precioNum": 1699
    },
    10: {
        "id": "10",
        "nombre": "Control inalámbrico Xbox",
        "descripcion": "Textura antiderrapante I Asignación de botones I Conector para auriculares estéreo de 3,5 mm I Tecnología Bluetooth®",
        "precio": "$1,399 MXN",
        "imagen": "assets/img/controlXbox.webp",
        "precioNum": 1399
    }
}

/* Establecer donde estamos */

function fileName() {
    var rutaAbsoluta = self.location.href;
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
    return rutaRelativa;
}

/* Dependiendo del archivo donde se encuentre, se cargan los datos */

function cargarDatos() {
    var nombreArchivo = fileName();
    //console.log(nombreArchivo);
    if (nombreArchivo == "juegos.html" || nombreArchivo == "juegos.html#") {
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.classList.add("txtAmarillo");
        for (const juego in juegos) {
            //console.log("Vuelta");
            tableDataJuegos += `
                    <div class="tarjetaProducto">
                        <img src=${juegos[juego].imagen} alt="${juegos[juego.nombre]}" class="imagenProducto">
                        <div class="detallesProducto">
                            <h3>${juegos[juego].nombre}</h3>
                            <p class="descripcionProducto">${juegos[juego].descripcion}</p>
                            <p class="precioProducto">Precio: <span>${juegos[juego].precio}</span></p>
                            <button class="btnComprar" onClick="addToCart(${juegos[juego].id}), mostrarMensaje()">Añadir al carrito</button>
                        </div>
                    </div>
                    `;

            tablaJuegos.innerHTML = tableDataJuegos;
        }
    } else if (nombreArchivo == "consolas.html" || nombreArchivo == "consolas.html#") {
        for (const consola in consolas) {
            //console.log("Vuelta");
            tableDataConsolas += `
                    <div class="tarjetaProducto">
                        <img src=${consolas[consola].imagen} alt="${consolas[consola.nombre]}" class="imagenProducto">
                        <div class="detallesProducto">
                            <h3>${consolas[consola].nombre}</h3>
                            <p class="descripcionProducto">${consolas[consola].descripcion}</p>
                            <p class="precioProducto">Precio: <span>${consolas[consola].precio}</span></p>
                            <button class="btnComprar" onClick="addToCart(${consolas[consola].id}), mostrarMensaje()">Añadir al carrito</button>
                        </div>
                    </div>
                    `;

            tablaConsolas.innerHTML = tableDataConsolas;
        }
    } else if (nombreArchivo == "accesorios.html" || nombreArchivo == "accesorios.html#") {
        for (const accesorio in accesorios) {
            //console.log("Vuelta");
            tableDataAccesorios += `
                    <div class="tarjetaProducto">
                        <img src=${accesorios[accesorio].imagen} alt="${accesorios[accesorio.nombre]}" class="imagenProducto">
                        <div class="detallesProducto">
                            <h3>${accesorios[accesorio].nombre}</h3>
                            <p class="descripcionProducto">${accesorios[accesorio].descripcion}</p>
                            <p class="precioProducto">Precio: <span>${accesorios[accesorio].precio}</span></p>
                            <button href="#" class="btnComprar" onClick="addToCart(${accesorios[accesorio].id}), mostrarMensaje()">Añadir al carrito</button>
                        </div>
                    </div>
                    `;

            tablaAccesorios.innerHTML = tableDataAccesorios;
        }
    } else if (nombreArchivo == "cart.html" || nombreArchivo == "cart.html#") {
        var productos = [];
        var lsData = localStorage.getItem(localStorageKeyName);
        if (lsData !== null) {
            productos = JSON.parse(lsData);
        }

        console.log(localStorage);
        cantidadCarrito.innerHTML = `<h3>Tienes ${productos.length} productos en tu carrito</h3>`;

        tablaCarrito.innerHTML = '';

        var contadorPrecio = Number(0);

        productos.forEach(function(x, i) {
            var id = x.id;


            // Creamos elementos HTML
            var div1 = document.createElement("div");
            var img = document.createElement("img");
            var div2 = document.createElement("div");
            var h3 = document.createElement("h3");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var button = document.createElement("a");

            // Agregamos clases a dichos elementos
            div1.classList.add("tarjetaProducto");
            img.classList.add("imagenProducto");
            div2.classList.add("detallesProducto");
            p1.classList.add("descripcionProducto");
            p2.classList.add("precioProducto");
            button.classList.add("btnComprar");

            button.innerHTML = 'Eliminar del carrito';

            // Creamos el evento para el botón
            button.addEventListener('click', function() {
                deleteFromCart(i);
            });

            /* Determino si el producto esta en juegos, consolas o accesorios */

            for (const juego in juegos) {
                if (juegos[juego].id == id) {
                    img.setAttribute("src", `${juegos[juego].imagen}`);
                    h3.innerHTML = `${juegos[juego].nombre}`;
                    p1.innerHTML = `${juegos[juego].descripcion}`;
                    p2.innerHTML = `${juegos[juego].precio}`;
                    contadorPrecio += Number(`${juegos[juego].precioNum}`);

                    div2.appendChild(h3);
                    div2.appendChild(p1);
                    div2.appendChild(p2);
                    div2.appendChild(button);

                    div1.appendChild(img);
                    div1.appendChild(div2);

                    tablaCarrito.appendChild(div1);
                    precioCarrito.innerHTML = "Monto total: $" + contadorPrecio + " MXN";
                }
            }

            for (const consola in consolas) {
                if (consolas[consola].id == id) {
                    img.setAttribute("src", `${consolas[consola].imagen}`);
                    h3.innerHTML = `${consolas[consola].nombre}`;
                    p1.innerHTML = `${consolas[consola].descripcion}`;
                    p2.innerHTML = `${consolas[consola].precio}`;
                    contadorPrecio += Number(`${consolas[consola].precioNum}`);

                    div2.appendChild(h3);
                    div2.appendChild(p1);
                    div2.appendChild(p2);
                    div2.appendChild(button);

                    div1.appendChild(img);
                    div1.appendChild(div2);

                    tablaCarrito.appendChild(div1);
                    precioCarrito.innerHTML = "Monto total: $" + contadorPrecio + " MXN";
                }
            }

            for (const accesorio in accesorios) {
                if (accesorios[accesorio].id == id) {
                    img.setAttribute("src", `${accesorios[accesorio].imagen}`);
                    h3.innerHTML = `${accesorios[accesorio].nombre}`;
                    p1.innerHTML = `${accesorios[accesorio].descripcion}`;
                    p2.innerHTML = `${accesorios[accesorio].precio}`;
                    contadorPrecio += Number(`${accesorios[accesorio].precioNum}`);

                    div2.appendChild(h3);
                    div2.appendChild(p1);
                    div2.appendChild(p2);
                    div2.appendChild(button);

                    div1.appendChild(img);
                    div1.appendChild(div2);

                    tablaCarrito.appendChild(div1);
                    precioCarrito.innerHTML = "Monto total: $" + contadorPrecio + " MXN";
                }
            }

        });

        botonVaciarCarrito.addEventListener("click", function() {
            localStorage.clear();
            location.reload();
        });
    }
};

function addToCart(id) {
    var productos = [];
    var lsData = localStorage.getItem(localStorageKeyName);
    if (lsData !== null) {
        productos = JSON.parse(lsData);
    }

    var producto = {
        id: id
    }

    productos.push(producto);
    localStorage.setItem(localStorageKeyName, JSON.stringify(productos));
}

function deleteFromCart(id) {
    console.log(id);
    var productos = [];
    var lsData = localStorage.getItem(localStorageKeyName);
    productos = JSON.parse(lsData);
    productos.splice(id, 1);
    localStorage.setItem(localStorageKeyName, JSON.stringify(productos));
    location.reload();
}


window.onload = cargarDatos();

function mostrarMensaje() {
    setTimeout(function() {
        mensajeEscondido.classList.remove("mensaje-escondido");
        mensajeEscondido.classList.add("mensaje-mostrar");
    }, 300);
    setTimeout(function() {
        mensajeEscondido.classList.remove("mensaje-mostrar");
        mensajeEscondido.classList.add("mensaje-escondido");
    }, 2000);
}