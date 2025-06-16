
const tecnologia = ['vue', 'cala', 'hello', 'gala']
const numeros = [50,30,25]


//includen comprueba si el elemento existe en el arreglos y los busca si 
//si lo encuentra es true y si no es false.


console.log(tecnologia.includes('gala'))

let resultado = tecnologia.includes('hello')

//te permite ver el indice del elemento
resultado = tecnologia.findIndex(tech =>tech=== "hello")

//some 

resultado = numeros.some (numeros => numeros > 20)

//find  busca si tieene ese numero en nel arreglo

resultado = numeros.find(numeros => numeros ===10)

console.log(resultado)

