// creo mi constructor para ingresar clientes

class Cliente {
    constructor (nombre,apellido,email,mensaje){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.mensaje = mensaje;

    }
}

const clientes = []

if (localStorage.getItem("clientes")) {
    let cliente = JSON.parse(localStorage.getItem("clientes"))

    for (let i = 0; i < cliente.length; i++) {
        clientes.push(cliente[i])
    }

}
const formulario = document.getElementById("form")

formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    agregarCliente();
    localStorage.setItem("clientes",JSON.stringify(clientes))
    formulario.reset();
})

function agregarCliente() {

const nombre = document.getElementById("nombre-form").value;
const apellido = document.getElementById("apellido-form").value;
const email = document.getElementById("email-form").value;
const mensaje = document.getElementById("mensajes-form").value;

if (nombre.trim() === "" || apellido === "" || email === "" || mensaje === ""){

    const nuevoCliente = new Cliente(nombre, apellido, email, mensaje);
    clientes.push(nuevoCliente);

    swal.fire({
        icon: 'error',
        title: 'Algo salió mal...',
        text: 'Debe completar todos los campos',
    })
} else { swal("Muy Bien!", "Bienvenido a nuestro newsletter", "success");
}

}

const enviarDatos = document.getElementById("btn.form")

enviarDatos.addEventListener("click", () =>
{
datosEnviados()
   })

   const datosEnviados = () => {

}
