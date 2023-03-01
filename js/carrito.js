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

// aca pinto de nuevo el arrays para cuando agregue los productos que desean comprar 

const pintarProductos = () => {
    let index = 0
    contenedor.innerHTML = ""
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
                <button onclick="eliminarDelCarrito(${productos.id})" class="btn-eliminar" id="${productos.id}">Eliminar</button>
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

// aca le agrego la funcion al boton vaciar carrito
const eliminarDelCarrito = (id) => {
    const producto = carrito.findIndex(productos => productos.id === id);
    carrito.splice(producto, 1);
    pintarProductos();
  };

  console.log(eliminarDelCarrito)

// agregandole funcion al boton vaciar carrito 
  
const btnVaciar = document.getElementById("btn-vaciar")

btnVaciar.addEventListener("click", () => {
vaciarCarrito()
})

const vaciarCarrito = () => {
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

    // aca use la api de github se puede apreciar el el footer 

fetch('https://api.github.com/users/Ricardom21')
// Exito
.then(response => response.json())  // convertir a json
.then(json => 
actualizarGit(json)

)    //imprimir los datos en la consola
.catch(err => console.log('Solicitud fallida', err)); // Capturar errores


const actualizarGit = (json) => {
    let valorgit = document.getElementById("githubR");
    valorgit.textContent=json.login;
}
