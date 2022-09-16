

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
  { id: 1, img href="https://www.istockphoto.com/es/fotos/jeans", nombre: "camisa", precio: 10000},
  { id: 2, nombre: "remera", precio: 5000},
  { id: 3, nombre: "sweater", precio: 7000},
  { id: 4, nombre: "jeans", precio: 14000},
];


let contenedor = document.getElementById("contenedor");
let precio = parseInt(prompt("Ingrese el precio maximo que desea abonar para que le mostremos los productos disponibles"));

let productosFiltrados = productos.filter(item => item.precio < precio);

for (const producto of productosFiltrados) {
  let div = document.createElement("div");
  div.innerHTML = `<p> ID: ${producto.id}</p>
                   <b>Producto: ${producto.nombre}</b>
                   <b>${producto.precio}</b>`;

  contenedor.append(div);
}

function agregar(){
  alert("agregado al carrito");
}

let boton =document.getElementById("btn");
boton.addEventListener("mouseup", agregar);




  













 


