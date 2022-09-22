

// EJEMPLO 1 - CALCULO DE INTERES:

 /*function precioTarjeta (precio,interes) {
  let suma = precio * interes;
  alert(suma);

 }
 let formaDePago = parseInt(prompt("ingrese el precio del producto que desea abonar con tarjeta"));
  
precioTarjeta(`${formaDePago}`, parseFloat(0.10));*/


//EJEMPLO 2 - DESCUENTO DEL IVA:

/*const suma = (a,b) => a + b;
const resta = (a, b) => a - b; 
const iva = x => x * 0.21;

let precio = 3000;
let descuento = 100;


let precioContado = resta(suma(precio,iva(precio)),descuento);
console.log(precioContado);*/


//EJEMPLO 3 -  OBJETOS

/*let precioRemeras ={
  largas: 1500,
  media: 1000,
  pupera: 850,
}
console.log(precioRemeras.media);*/

/*function Remera(img, nombre, precio) {
  this.img = img;
  this.nombre = nombre;
  this.precio = precio;
}
const remera1 = new Remera("img","remeron",1500);
console.log(remera1);*/


//EJEMPLO 4 - ARRAYS

/*const arreglo1 = ["remera", "camisa", "sweaters", "buzos", "camperas", "jeans", "pantalones", "vestidos", "kimonos"];
arreglo1.push ("polleras", "shorts");
arreglo1.unshift("accesorios");

for (let i = 0; i < arreglo1.length; i++){
  console.log(arreglo1[i].toLocaleUpperCase());
}
*/

//EJEMPLO 5 - FUNCION CONSTRUCTORA

/*function Remera(img, nombre, precio) {
  this.img = img;
  this.nombre = nombre;
  this.precio = precio;
}

const arreglo = [];

for (let index = 0; index < 10; index++) {
  let img = prompt ("ingrese la imagen");
  let nombre = prompt("ingrese el nombre");
  let precio = prompt ("ingrese el precio");
  let objeto = new Remera (img, nombre, precio);
  
  arreglo. push (objeto);
  
}

console.log(arreglo);*/


// EJEMPLO 6 - FUNCIONES DE ALTO ORDEN


  /*const productos = [
    {id: 1, nombre: "camisa", precio: 3000},
    {id: 2, nombre: "pantalon", precio: 10000},
    {id: 3, nombre: "sweaters", precio: 4000},
    {id: 4, nombre: "jeans", precio: 12000},
    {id: 5, nombre: "camperas", precio: 15000},
    {ide: 6, nombre: "buzos", precio: 5000},
  ];
  
  // EJEMPLO 1 

  let nombre = prompt("ingrese el producto que busca");
  let busqueda = productos.find(prenda => prenda.nombre === nombre);
  let mensaje =`ID: ${busqueda.id}
  NOMBRE: ${busqueda.nombre}
  PRECIO: $${busqueda.precio}`;
  alert(mensaje);*/


  /*EJEMPLO 2 

  let precio = prompt("ingrese el importe maximo que desea gastar");
  let busqueda = productos.filter (prenda => prenda.precio > precio);
  console.log(busqueda);*/

  /*let contenedor =document.getElementById ("contenedor");
  let parrafo = document.createElement ("p");
  parrafo.innerHTML = "<h2>ELEGI TUS FAVORITOS!</h2>";
  contenedor.append(parrafo);



  let personas = ["remera", "camisa", "sweaters", "buzos", "camperas", "jeans", "pantalones", "vestidos", "kimonos"];
  let lista = document.getElementById ("personas");

  for(const persona of personas){
  let li = document.createElement ("li");
  li.innerHTML = persona;
  lista.append(li);
  }*/

 // DOM
 const productos = [
  { id: 1, img : "./imagenes/camisa.jpg", nombre: "camisa", precio: ("10000"), boton: "agregar al carrito"},
  { id: 2, img : "./imagenes/remera.jpg", nombre: "remera", precio: ("5000"), boton: "agregar al carrito"},
  { id: 3, img : "./imagenes/sweater.jpg", nombre: "sweater", precio: ("7100"), boton: "agregar al carrito"},
  { id: 4, img : "./imagenes/jeans.jpg", nombre: "jeans", precio: ("14480"), boton: "agregar al carrito"},
  { id: 5, img : "./imagenes/campera.jpg", nombre: "campera", precio: ("22000"), boton: "agregar al carrito"},
  { id: 6, img : "./imagenes/buzo.jpg" , nombre: "buzo" , precio: ("11800"), boton: "agregar al carrito"},
];

let contenedor = document.getElementById ("contenedor");

for (const producto of productos){

  let div = document.createElement ("div");
  div.innerHTML = `<div class="card" style="width: 12rem;">
                    <img src=${producto.img} class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">$${producto.precio}</p>
                      <a href="#" class="btn btn-primary" id=btn${producto.id}>Me lo llevo!</a>
                    </div>
                  </div>`;
contenedor.append(div);
const boton = document.getElementById (`btn${producto.id}`)
boton.addEventListener ("click", () =>{
  alert(`Se agrego ${producto.nombre} al carrito`);

})
}
localStorage.setItem ("productos", JSON.stringify(productos));

function cambiarPrecio(nombre,precio){
  let array = JSON.parse(localStorage.getItem("productos"));

  const producto = array.find(elemento => elemento.nombre === nombre);
  producto.precio = precio;

  localStorage.setItem ("productos", JSON.stringify(array));
}
cambiarPrecio ("camisa", "9000");




  













 


