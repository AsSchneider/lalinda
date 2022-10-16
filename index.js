const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
const botonComprar = document.getElementById("comprar");
const portada = document.getElementById("portada");
const footer = document.getElementById("pieDePagina");


let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})


//array
let prod = [];

let traerDatos = async () => {
  let response = await fetch("./data.json");
  let data = await response.json();
  let productos = data;

  data.forEach((producto) => {
    prod.push(producto)
  });

  productos.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img src=${producto.img} alt"">
        <h3>${producto.nombre}</h3>
        <p class="precioProducto">$${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Me lo llevo!<i class="fas fa-shopping-cart"></i></button>`
    contenedorProductos.append(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener(`click`, () => {
      agregarAlCarrito(producto.id)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    })
  })
}
traerDatos();

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)
  if (existe) {
    const producto = carrito.map(prod => {
      if (prod.id === prodId) {
        prod.cantidad++
      }

    })
  } else {
    const item = prod.find((prod) => prod.id === prodId);
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


comprar.addEventListener("click", () => {
  carrito.length = 0
  actualizarCarrito()

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Su compra se concreto con exito',
    showConfirmButton: false,
    timer: 1500
  })
})

//nodo portada

let carrusel = document.createElement("carrusel");
carrusel.innerHTML = `

  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
      <div class="carousel-item active">
          <img src="./imagenes/portada.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
          <img src="./imagenes/portada1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
          <img src="./imagenes/portada2.jpg" class="d-block w-100" alt="...">
      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
    data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
    data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
  </div>`

portada.appendChild(carrusel);

//nodo footer

let div = document.createElement("div");
div.innerHTML = `
  <p class="direccion">Seguinos!</p>
  <ul class="redes__lista">
      <li class="redes__lista__item"><a href="https://www.facebook.com" target="_blank">facebook</a></li>
      <li class="redes__lista__item"><a href="https://www.instagram.com" target="_blank">instagram</a></li>
  </ul>
  <a href="https://www.whatsapp.com/" target="_blank"><img src="./imagenes/wsp.png" alt="whatsapplogo"
        class="wsp"></a>
  <span class="copi">&#169;Astrid Schneider 2022</span>`

footer.appendChild(div);