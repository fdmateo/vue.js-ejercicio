
const tecnologia = ['vue', 'cala', 'hello', 'gala']
const numeros = [50,30,25]


//includen comprueba si el elemento existe en el arreglos y los busca si 
//si lo encuentra es true y si no es false.


console.log(tecnologia.includes('gala'))

let resultado = tecnologia.includes('hello')

//te permite ver el indice del elemento
resultado = tecnologia.findIndex(tech =>tech=== "hello")

//some te duce si es mayor o menos a los numero que tienes en tu arreglo

resultado = numeros.some (numeros => numeros > 20)

//find  busca si tiene ese numero en el arreglo

resultado = numeros.find(numeros => numeros ===10)

//every

resultado = numeros.every (numeros => numeros < 20)

//reduce te retorna un acumulado de la lista del array que tengas en numero te lo suma todo y te da el total

resultado = numeros.reduce((total, numero) => numero + total, 20)

//filter

resultado = tecnologia.filter (tech => tech === "hello")



console.log(resultado)

