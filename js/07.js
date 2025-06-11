

// aqui lo que estamos haciendo es uninedo dos tablas y la informacion se une 
const obje = {
    nombre: "tablet",
    precio: 50,
    disponible: true
}

const cliente = {

    nombre: 'juan',
    premiun: true

}


// const nuevoObjecto = Object.assign(cliente,obje)

// console.log (nuevoObjecto)

const nuevoObjecto= {
    obje,
    cliente,


}

console.log(nuevoObjecto)

