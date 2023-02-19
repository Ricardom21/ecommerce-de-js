const actualizarValorCarrito = () => {
    let valorCarrito = document.getElementById("valorCarrito");
    valorCarrito.textContent=carrito.length;
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
actualizarValorCarrito()
 
// aca actualizo el precio final

const actualizarPrecioFinal = () => {
    const precioFinal =document.getElementById("precio-final")
    const total = carrito.reduce((acc,p) => acc+p.precio,0)
    precioFinal.innerHTML = `$${total}`
}

actualizarPrecioFinal()

const contenedor = document.getElementById('productos')

// pintar el arrays

const pintarProductos = () => {
    let index = 0
    carrito.forEach((productos) => {
        const div = document.createElement('div')
        div.classList.add('productos')
        div.innerHTML = `
        <div class="container">
        <div class="card-flex">
            <div class="card-info">
                <div class="product-image">
                    <img src="${productos.img}" alt="${productos.titulo}">
                </div>
                <h3>${productos.nombre}</h3>
                <span>⭐⭐⭐⭐⭐</span>
                <p>${productos.precio} $</p>
                
            </div>
        `
        contenedor.appendChild(div)
            index++

           
        
     })
};

pintarProductos()

// aca le agrego la funcion al boton vaciar carrito
const btnVaciar = document.getElementById("btn-vaciar")

btnVaciar.addEventListener("click", () =>
vaciarCarrito())

const vaciarCarrito = () => {
    console.log("vaciando")
    carrito.splice(0,carrito.length)
    localStorage.setItem("carrito",
    JSON.stringify([]))
    actualizarPrecioFinal()
    actualizarValorCarrito()
    pintarProductos()
}

// aca le agrego la funcion finalizar compra

const finalizarCompra = document.getElementById("btn-finalizar")

finalizarCompra.addEventListener("click", () =>
compraFinalizada())

const compraFinalizada = () => {
    finalizarCompra.innerText = "Muchas gracias por tu compra"
    valorCarrito.innerText=0
    productos.innerHTML = `muchas gracias`
   
}