class Bebida {
    nombre;
    precio;
    cantidad;

    constructor(nombre, precio) {
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=0;
    }
}
class Carrito {
    bebidas;

    constructor(){
        this.bebidas=[];
    }
}


let cocaCola = new Bebida("Coca Cola",140);
let sprite = new Bebida("Sprite",140);
let fanta = new Bebida("Fanta",140);
let redBull = new Bebida("Red Bull",170);
let jagger= new Bebida("Jagger",920);
let whisky = new Bebida("Whisky",610);
let ron = new Bebida("Ron",690);
let fernet= new Bebida("Fernet",560);
let gin = new Bebida("Gin",400);
let vodka = new Bebida ("Vodka",520);
let campari = new Bebida("Campari",350);
let cerveza = new Bebida("Cerveza",180);

let carritoActual = new Carrito();
carritoActual.bebidas.push(cocaCola);
carritoActual.bebidas.push(sprite);
carritoActual.bebidas.push(fanta);
carritoActual.bebidas.push(redBull);
carritoActual.bebidas.push(jagger);
carritoActual.bebidas.push(whisky);
carritoActual.bebidas.push(ron);
carritoActual.bebidas.push(fernet);
carritoActual.bebidas.push(gin);
carritoActual.bebidas.push(vodka);
carritoActual.bebidas.push(campari);
carritoActual.bebidas.push(cerveza);




function cargarLocalStorage(){
    let carritoJSON = JSON.stringify(carritoActual);
    localStorage.setItem("Carrito",carritoJSON);
}

function descargarLocalStorage(){
    let carritoLocalStorage = localStorage.getItem("Carrito");
    if(carritoLocalStorage===null){
        
    }else{
        let carritoObjet = JSON.parse(carritoLocalStorage);
        carritoActual = carritoObjet;
    }
}


descargarLocalStorage();


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


btnFernet.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="fernet"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnRon.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="ron"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnGin.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="gin"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnWhisky.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="whisky"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnJagger.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="jagger"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnCampari.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="campari"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})

btnVodka.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="vodka"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnCerveza.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="cerveza"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})

btnCoca.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="coca cola"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnSprite.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="sprite"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnRedBull.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="red bull"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})
btnFanta.addEventListener('click',function(){
    for (articulo of carritoActual.bebidas){
        if(articulo.nombre.toLowerCase()=="fanta"){
            articulo.cantidad +=1;
        }
    }
    cargarLocalStorage();
    mostrarCarrito();
})





function mostrarCarrito (){
    const body = document.getElementById("items");
    body.innerHTML=``;
    carritoActual.bebidas.forEach(bebida => {
        if(bebida.cantidad!=0){
            body.innerHTML= body.innerHTML + 
            `<tr>
                <th>${bebida.nombre}</th>
                <th>${bebida.cantidad}</th>
                <th>${bebida.precio}</th>
            </tr>
            `
        }
    });
    const precioTotal = document.getElementById("precioTotal");
    let precioCarrito =0;
    for (bebida of carritoActual.bebidas){
        precioCarrito+= (bebida.cantidad)*(bebida.precio);
    }
    precioTotal.textContent = "Precio Total del Carrito: $" + precioCarrito;
}


const btnVaciar = document.getElementById("vaciarCarrito");

btnVaciar.addEventListener('click',function(){
    carritoActual.bebidas.forEach(bebida => {
        bebida.cantidad=0;
    })
    cargarLocalStorage();
    mostrarCarrito();
})





mostrarCarrito();