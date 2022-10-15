/*const stockProductos = [
  { id: 1, img: "./imagenes/camisa.jpg", nombre: "camisa", cantidad: 1, precio: ("10000"), boton: "agregar al carrito" },
  { id: 2, img: "./imagenes/remera.jpg", nombre: "remera", cantidad: 1, precio: ("5000"), boton: "agregar al carrito" },
  { id: 3, img: "./imagenes/sweater.jpg", nombre: "sweater", cantidad: 1, precio: ("7100"), boton: "agregar al carrito" },
  { id: 4, img: "./imagenes/jeans.jpg", nombre: "jeans", cantidad: 1, precio: ("14480"), boton: "agregar al carrito" },
  { id: 5, img: "./imagenes/campera.jpg", nombre: "campera", cantidad: 1, precio: ("22000"), boton: "agregar al carrito" },
  { id: 6, img: "./imagenes/buzo.jpg", nombre: "buzo", cantidad: 1, precio: ("11800"), boton: "agregar al carrito" },
]*/

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
  }
})


fetch ("data.json")
.then(response => response.json())
.then(data => {
  console.log(json);
  data.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
      <img src=${producto.img} alt"">
      <h3>${producto.nombre}</h3>
      <p class="precioProducto">$${producto.precio}</p>
      <button id="agregar${producto.id}" class="boton-agregar">Me lo llevo!<i class="fas fa-shopping-cart"></i></button>
      `;

      contenedorProductos.append(div);

})
})


/*stockProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
  <img src=${producto.img} alt"">
  <h3>${producto.nombre}</h3>
  <p class="precioProducto">$${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Me lo llevo!<i class="fas fa-shopping-cart"></i></button>`
  contenedorProductos.append(div);*/

  const boton = document.getElementById(`agregar${producto.id}`)
  boton.addEventListener(`click`, () => {
    agregarAlCarrito(producto.id)
  })
//})

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)
  if (existe) {
    const producto = carrito.map(prod => {
      if (prod.id === prodId) {
        prod.cantidad++
      }

    })
  } else {
    const item = stockProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
    console.log(carrito);
  }
  actualizarCarrito();
}


const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id == prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
    const div = document.createElement(`div`);
    div.className = (`productoEnCarrito`);
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)
    localStorage.setItem('carrito', JSON.stringify(carrito))
  })

  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

let comprar = document. getElementById ("comprar");
comprar.addEventListener ("click", () =>{
    
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Su compra se concreto con exito',
    showConfirmButton: false,
    timer: 1500
  })
})
