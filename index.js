//  EJEMPLO DE FUNCIONES

/*function formaDePago(tarjeta, contado, debito){

    let pago = prompt("ingrese su forma de pago: contado - tarjeta - debito");

    switch (pago) {
        case "tarjeta":
            alert("su interes es del 10%");

            break;

        case "debito":
            alert("su interes es del 5%");
            break;

        case "contado":
            alert("el precio final es el que esta publicado");

            break;

        default:
            alert("operacion no definida");
            break;
    }
}

formaDePago();*/


// EJEMPLO DE CALCULO DE INTERES:

 /*function precioTarjeta (precio,interes) {
  let suma = precio * interes;
  alert(suma);

 }
 let formaDePago = parseInt(prompt("ingrese el precio del producto que desea abonar con tarjeta"));
  
precioTarjeta(`${formaDePago}`, parseFloat(0.10));*/


//EJEMPLO DESCUENTO DEL IVA:

/*const suma = (a,b) => a + b;
const resta = (a, b) => a - b; 
const iva = x => x * 0.21;

let precio = 3000;
let descuento = 100;


let precioContado = resta(suma(precio,iva(precio)),descuento);
console.log(precioContado);*/


//EJEMPLO DE OBJETO

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


//EJEMPLOS DE ARRAYS

/*const arreglo1 = ["remera", "camisa", "sweaters", "buzos", "camperas", "jeans", "pantalones", "vestidos", "kimonos"];
arreglo1.push ("polleras", "shorts");
arreglo1.unshift("accesorios");

for (let i = 0; i < arreglo1.length; i++){
  console.log(arreglo1[i].toLocaleUpperCase());
}
*/

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

console.log(arreglo);


//FUNCIONES DE ALTO ORDEN

CLASE 7

function operaciones(op){
    if(op === "sumar"){
      return (a, b) => a + b;
    }
  
    if(op === "restar"){
      return (a, b) => a - b;
    }
  
    if(op === "multiplicar"){
      return (a, b) => a * b;
    }
  
    if(op === "dividir"){
      return (a, b) => a / b;
    }
  }
  
  let suma = operaciones("sumar");
  let resta = operaciones("restar");
  
  console.log(suma(5,6));
  console.log(resta(4, 1));*/




  const productos = [
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
  let mensaje = ` ID: ${busqueda.id}
  NOMBRE: ${busqueda.nombre}
  PRECIO: $${busqueda.precio}`;
  alert(mensaje);

  //console.log(busqueda);

  /*EJEMPLO 2 

  let precio = prompt("ingrese el importe maximo que desea gastar");
  let busqueda = productos.filter (prenda => prenda.precio > precio);


  console.log(busqueda);*/







 


