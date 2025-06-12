// Iteradores en js

const tecnologia = ['vue', 'cala', 'hello', 'gala']



//forEach  Valor de retorno: forEach siempre devuelve undefined. Esto significa que no crea un nuevo array a partir de los resultados de la función callback. 
//Su objetivo es simplemente realizar una acción por cada elemento, como imprimirlo en la consola, modificar un valor externo, etc.

const arrayForEach = tecnologia.forEach(function (tech) {
    return tech

})



//map  Propósito principal: Iterar sobre cada elemento de un array, 
//ejecutar una función (callback) para cada uno, y crear un nuevo array con los resultados de cada llamada a la función.

const arrayMap = tecnologia.map(function (tech) {
    return tech

})

console.log(arrayForEach)
console.log(arrayMap) 