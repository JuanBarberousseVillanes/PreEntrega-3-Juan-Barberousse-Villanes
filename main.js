
class Carrito {
    bebidas;

    constructor() {
        this.bebidas = [];
    }
}
let carritoActual = new Carrito();


function carga() {
    let carritoLocalStorage = localStorage.getItem("Carrito");
    if (carritoLocalStorage == "{\"bebidas\":[]}" ) {
        fetch("./bebidas.json")
            .then(response => response.json())
            .then(data => {
                carritoActual.bebidas = data;
            })
    } else {
        let carritoObjet = JSON.parse(carritoLocalStorage);
        carritoActual = carritoObjet;
    }
}



function cargarLocalStorage() {
    let carritoJSON = JSON.stringify(carritoActual);
    localStorage.setItem("Carrito", carritoJSON);
}

function descargarLocalStorage() {
    let carritoLocalStorage = localStorage.getItem("Carrito");
    if (carritoLocalStorage === null) {

    } else {
        let carritoObjet = JSON.parse(carritoLocalStorage);
        carritoActual = carritoObjet;
    }
}





const btnFernet = document.getElementById("botonFernet");
const btnRon = document.getElementById("botonRon");
const btnGin = document.getElementById("botonGin");
const btnWhisky = document.getElementById("botonWhisky");
const btnJagger = document.getElementById("botonJagger");
const btnCampari = document.getElementById("botonCampari");
const btnVodka = document.getElementById("botonVodka");
const btnCerveza = document.getElementById("botonCerveza");
const btnCoca = document.getElementById("botonCoca");
const btnSprite = document.getElementById("botonSprite");
const btnRedBull = document.getElementById("botonRedBull");
const btnFanta = document.getElementById("botonFanta");

function productoAgregado() {
    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        offset: {
            y: "6rem"
        },
        onClick: function () { }
    }).showToast();
}
function carritoVaciado() {
    Toastify({
        text: "Carrito vaciado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        offset: {
            y: "1.5rem"
        },
        onClick: function () { }
    }).showToast();
}
btnFernet.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "fernet") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnRon.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "ron") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnGin.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "gin") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnWhisky.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "whisky") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnJagger.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "jagger") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnCampari.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "campari") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})

btnVodka.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "vodka") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnCerveza.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "cerveza") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})

btnCoca.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "coca cola") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnSprite.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "sprite") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnRedBull.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "red bull") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})
btnFanta.addEventListener('click', function () {
    for (let articulo of carritoActual.bebidas) {
        if (articulo.nombre.toLowerCase() == "fanta") {
            articulo.cantidad += 1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
    productoAgregado();
})





function mostrarCarrito() {
    const body = document.getElementById("items");
    body.innerHTML = ``;
    carritoActual.bebidas.forEach(bebida => {
        if (bebida.cantidad != 0) {
            body.innerHTML = body.innerHTML +
                `<tr>
                <th>${bebida.nombre}</th>
                <th>${bebida.cantidad}</th>
                <th>${bebida.precio}</th>
            </tr>
            `
        }
    });
    const precioTotal = document.getElementById("precioTotal");
    let precioCarrito = 0;
    for (let bebida of carritoActual.bebidas) {
        precioCarrito += (bebida.cantidad) * (bebida.precio);
    }
    precioTotal.textContent = "Precio Total del Carrito: $" + precioCarrito;
}


const btnVaciar = document.getElementById("vaciarCarrito");

btnVaciar.addEventListener('click', function () {
    carritoActual.bebidas.forEach(bebida => {
        bebida.cantidad = 0;
    })
    cargarLocalStorage();
    mostrarCarrito();
    carritoVaciado();
})

const botonComprar = document.getElementById("terminarCompra");

botonComprar.addEventListener('click', function () {
    descargarLocalStorage();
    let hay = false;
    for (let articulo of carritoActual.bebidas) {
        if (articulo.cantidad > 0) {
            hay = true;
        }
    }
    if (hay == false) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes tener productos en el carrito para finalizar la compra",
        });
    } else {
        apagarBotones();
        let elemOculto = document.getElementById("mainAux");
        elemOculto.style.display = "flex";

    }
})


function apagarBotones() {
    let btnVaciar = document.getElementById("vaciarCarrito");
    let btnTerminarCompra = document.getElementById("terminarCompra");
    btnVaciar.disabled = true;
    btnTerminarCompra.disabled = true;
    btnCampari.disabled = true;
    btnCerveza.disabled = true;
    btnCoca.disabled = true;
    btnFanta.disabled = true;
    btnFernet.disabled = true;
    btnGin.disabled = true;
    btnJagger.disabled = true;
    btnRedBull.disabled = true;
    btnRon.disabled = true;
    btnSprite.disabled = true;
    btnVodka.disabled = true;
    btnWhisky.disabled = true;
}

function prenderBotones() {
    let btnVaciar = document.getElementById("vaciarCarrito");
    let btnTerminarCompra = document.getElementById("terminarCompra");
    btnVaciar.disabled = false;
    btnTerminarCompra.disabled = false;
    btnCampari.disabled = false;
    btnCerveza.disabled = false;
    btnCoca.disabled = false;
    btnFanta.disabled = false;
    btnFernet.disabled = false;
    btnGin.disabled = false;
    btnJagger.disabled = false;
    btnRedBull.disabled = false;
    btnRon.disabled = false;
    btnSprite.disabled = false;
    btnVodka.disabled = false;
    btnWhisky.disabled = false;
}



const btnCancelarCompra = document.getElementById("cancelarCompra");
const btnFinalizarCompra = document.getElementById("finalizarCompra");

btnCancelarCompra.addEventListener('click', function () {
    let elemOculto = document.getElementById("mainAux");
    elemOculto.style.display = "none";
    prenderBotones();
})

btnFinalizarCompra.addEventListener('click', function () {
    let num = document.getElementById("numeroTarjeta").value;
    let mesVenc = document.getElementById("mesVencimiento").value;
    let anioVenc = document.getElementById("anioVencimiento").value;
    let nombreTitular = document.getElementById("nombreTitular").value;
    let cvv = document.getElementById("cvv").value;

    if (num == "" || mesVenc == "" || anioVenc == "" || nombreTitular == "" || cvv == "") {
        Toastify({
            text: "Debes rellenar todos los campos",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgba(255, 0, 0, 0.856), rgba(255, 0, 0, 0.856))",
            },
            offset: {
                y: "6rem"
            },
            onClick: function () { }
        }).showToast();
    } else if (num.length != 16) {
        Toastify({
            text: "Ingrese un numero de tarjeta valido",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgba(255, 0, 0, 0.856), rgba(255, 0, 0, 0.856))",
            },
            offset: {
                y: "6rem"
            },
            onClick: function () { }
        }).showToast();
    } else if (mesVenc.length != 2 || mesVenc < 1 || mesVenc > 12) {
        Toastify({
            text: "Ingrese un mes de vencimiento valido",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgba(255, 0, 0, 0.856), rgba(255, 0, 0, 0.856))",
            },
            offset: {
                y: "6rem"
            },
            onClick: function () { }
        }).showToast();
    } else if (anioVenc.length != 4 || anioVenc < 2023) {
        Toastify({
            text: "Ingrese un año de vencimiento valido",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgba(255, 0, 0, 0.856), rgba(255, 0, 0, 0.856))",
            },
            offset: {
                y: "6rem"
            },
            onClick: function () { }
        }).showToast();
    } else if (cvv.length != 3) {
        Toastify({
            text: "Ingrese un cvv valido",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, rgba(255, 0, 0, 0.856), rgba(255, 0, 0, 0.856))",
            },
            offset: {
                y: "6rem"
            },
            onClick: function () { }
        }).showToast();
    } else {
        let elemOculto = document.getElementById("mainAux");
        elemOculto.style.display = "none";
        prenderBotones();
        Swal.fire({
            icon: "success",
            title: "Compra realizada con exito",
            showConfirmButton: false,
            timer: 1500
        });
        carritoActual.bebidas.forEach(bebida => {
            bebida.cantidad = 0;
        })
        cargarLocalStorage();
        mostrarCarrito();
        vaciarCampos();
    }

})

function vaciarCampos() {
    document.getElementById("numeroTarjeta").value = "";
    document.getElementById("mesVencimiento").value = "";
    document.getElementById("anioVencimiento").value = "";
    document.getElementById("nombreTitular").value = "";
    document.getElementById("cvv").value = "";
}


carga();
descargarLocalStorage();
mostrarCarrito();