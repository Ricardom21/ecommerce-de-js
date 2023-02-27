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

const botonEliminar = document.getElementById("btn-eliminar")
const botonFinalizar = document.getElementById("finalizar")
const precio = document.getElementById("precio")

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

// aca cree la funcion para que me salga el alert


const sweetAlertCarrito = document.getElementById("btn-finalizar")
sweetAlertCarrito.addEventListener("click", () => {
        swal("Gracias por tu compra")
})

const sweetAlertVacio = document.getElementById("btn-finalizar")
sweetAlertCarrito.addEventListener("click", () => {
        swal("Carrito vacio")

})


// aca le agrego la funcion al boton vaciar carrito
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) =>
producto.id === id)
carrito.splice(carrito.indexOf(producto))
}

const btnVaciar = document.getElementById("btn-vaciar")

btnVaciar.addEventListener("click", () => {
vaciarCarrito()
})

const vaciarCarrito = () => {
    console.log("vaciando")
    carrito.splice(0,carrito.length)
    localStorage.setItem("carrito",
    JSON.stringify([]))
    actualizarPrecioFinal()
    actualizarValorCarrito()
    pintarProductos()

    valorCarrito.innerText=0
    contenedor.innerHTML = ""


}

// aca le agrego la funcion finalizar compra


const finalizarCompra = document.getElementById("btn-finalizar")

finalizarCompra.addEventListener("click", () =>
{
compraFinalizada()
sweetAlertCarrito()
   
if (carrito.length>0) {
    sweetAlertCarrito()
} else{
    sweetAlertVacio()
}

})
const compraFinalizada = () => {

    valorCarrito.innerText=0
    contenedor.innerHTML = ""
    botonEliminar.innerHTML = ""
    botonFinalizar.innerHTML= ""
    precio.innerHTML= ""
   



    const pintarProductos = () => {
            const div = document.createElement('div')
            div.classList.add('productos')
            div.innerHTML = `
             `
            contenedor.appendChild(div)
                
    
               
            
    }
    pintarProductos()
    };

    