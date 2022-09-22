/*const carritoDeCompras []

const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById ("producto-contenedor")

    const renderProductosCarrito = ()=>{
        let producto = productos.find (producto => producto.id == productoId)
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1 //hacer condicional

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = ` <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">$${producto.precio}</p>
        `
        contenedorCarrito.appendChild(div)
    }

    renderProductosCarrito()


}*/