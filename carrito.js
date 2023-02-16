const carrito = JSON.parse(localStorage.getItem('carrito')) || []

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
                <button onclick="aggCarrito(${index})" class="producto-agregar" id="${productos.id}">Agregar</button>
            </div>
        `
        contenedor.appendChild(div)
            index++
        
     })
};

pintarProductos()

const totalPrecio = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
