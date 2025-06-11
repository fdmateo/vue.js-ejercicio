//Destructuring de 2 o mas objectos

const obje = {
    nombre: "tablet",
    precio: 50,
    disponible: true
}

const cliente = {

    nombre: 'juan',
    premiun: true

}

console.log(obje.nombre)
console.log(cliente.nombre)


const {nombre}=obje


/*renombrar variables nuevas no modifican las originales esto porque cuando declara dos variables con el 
mismo nombre no se ejecutara, la ppuedes utilizar en api y renombrar*/
const{nombre:nombre1}=cliente

console.log (nombre)
console.log(nombre1)



