
const tecnologia = ['vue', 'cala', 'hello', 'gala']
const numeros = [50,30,25]


//includen comprueba si el elemento existe en el arreglos y los busca si 
//si lo encuentra es true y si no es false.


// console.log(tecnologia.includes('gala'))

let resultado = tecnologia.includes('hello')

resultado = tecnologia.findIndex(tech =>tech=== "hello")

console.log(resultado)

