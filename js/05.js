//esto se hace en objecto

const obje = {
    nombre: "tablet",
    precio: 50,
    disponible: true
}

//Reescribir un valor

obje.nombre="Monitor curvo"



//agregar un valor

obje.imagen = "imagen.jpg"
obje.disponible = true

//borra 

// delete obje.disponible

const {imagen,precio,...obje1}= obje

console.log(obje1)

//este no te permite modificar nada

Object.freeze(obje)