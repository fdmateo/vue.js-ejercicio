//Array o Arreglos 

const tecnologia = ['vue','cala','hello', 'gala']

//agrega elemento al final del arreglo
tecnologia.push('hola')
//agrega elementos al inicio del arreglo
tecnologia.unshift('mateo1')

//elimina del inicio del arreglo
tecnologia.shift('mateo')

//elimina elemento del final del arreglo
tecnologia.pop()

// console.table (tecnologia[2])
console.log (tecnologia)

// esto se usa para borrar
tecnologia.splice(2,1)

//esto copia el arreglo que tiene
const nuevoArreglo = [...tecnologia,'kkaka']
console.log (tecnologia)
console.log(nuevoArreglo)


//pones linea entre cada unos de los datos que esta en array 
// tecnologia.filter(function(tech){
// console.log(tech)
// })



//este genera un nuevo arreglo

tecnologia2 = tecnologia.filter(function(tech){
   return tech !=='hello'
    })
    
    console.log(tecnologia2)