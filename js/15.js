//Arrow functions y sus carateristica
// y no se pueen utilizar en function declaraction

// function sumar(numero1 = 8, numero2 = 5) {



//     console.log(numero1 + numero2)
// }


const suma = function (numero1 = 20, numero2 = 30){

    console.log (numero1 + numero2)

    

}

suma();





//forEach  Valor de retorno: forEach siempre devuelve undefined. Esto significa que no crea un nuevo array a partir de los resultados de la función callback. 
//Su objetivo es simplemente realizar una acción por cada elemento, como imprimirlo en la consola, modificar un valor externo, etc.




// const arrayForEach = tecnologia.forEach(function (tech) {
//     return tech

// })



const tecnologia = ['vue', 'cala', 'hello', 'gala']


// const arrayForEach =
 tecnologia.forEach( (tech) => {
  console.log(tech)

});

//tecnologia.forEach( (tech) =>console.log(tecnologia))
  
  




//map  Propósito principal: Iterar sobre cada elemento de un array, 
//ejecutar una función (callback) para cada uno, y crear un nuevo array con los resultados de cada llamada a la función.

const arrayMap = tecnologia.map( (tech)=> {
    return tech

})

//segunda version de arrayMap el return se da por implicito

//const arrayMap = tecnologia.map( (tech)= tech)


console.log(arrayMap)

// sumar(1,5)
// sumar(50,7899)
// sumar()
