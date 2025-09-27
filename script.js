// Aula sobreconversão de tipo e coerção de tipo

/*
- Conversão de tipos (type ou type conversion):
ocorre quando você explicitamente transforma um valor 
de um tipo para outro. isso é feito de forma consciente, usando
metodos especificos ára realizar a conversão. 
 */
 
let value = "5"
console.log(value)
console.log(typeof value)
console.log(typeof Number(value))

let age = 24
console.log(age)
console.log(typeof age)
console.log(typeof String(age))
console.log (typeof age.toString())
console.log(String(age))

let option1 = 1
let option2 = 0
console.log (option1)
console.log (typeof Boolean(option1))
console.log(Boolean(option1))
console.log(Boolean(option2))


/*
- Coerção de tipos: acontece de forma automática (implicitamente).
o JS tenta automaticamente converter um dos valores para um tipo 
compátivel antes de realizar a operação.
*/

console.log("10" + 5)
console.log(typeof ("10" + 5))
