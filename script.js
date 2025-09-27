// Expressões e Operadores

//operadores aritméticos
console.log("operadores aritimeticos")

console.log("soma: ", 10 + 5)

// cuidado com a concatenação de palavra
console.log("concatenação: ", "10" + 5)

console.log("subtração: ", 10 - 5)

console.log("multiplicação: ", 10 * 5)

console.log("exponencial: ", 3 ** 2)

console.log("divisão: ", 10 / 5)

//Muito usado pra ver se o numero é par ou impar
console.log("Resto: ", 11 % 5)

//inclemento e declemento
console.log("inclemento e declemento")
let number = 10

//inclemento (adicionar)
number = number + 1
console.log(number)
number++
console.log(number)
number += 2
console.log(number)

//declemento (remover)
number = number -1
console.log(number)
number--
console.log(number)
number -= 2
console.log(number)

//Grouping operator
console.log("grouping operator")

let total1 =  2 + 3 * 4
console.log(total1)
let total2 = (2 +3) * 4
console.log(total2)
let average = (9 + 8 + 6.5)/3
console.log(average)

//operadores de comparação e diferenciação 
console.log("operadores de comparação e diferenciação")

let one = 1
let two = 2

// comparação (igual a) ==
console.log("### igual a ###")
console.log(one==two)
console.log(one == 1)
console.log(one == "1") //ele não diferencia tipo de variavel

//diferenciação (Diferente de) !=
console.log("### Diferente de ###")
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

//estritamente igual a e estitamente diferente de
//ele não vai so olhar pra o conteudo mas sim pra o tipo tambem.
console.log("estitamente igual a ou diferente de")

// estitamente igual a ===
console.log("### estitamente igual a ###")
console.log(one === two)
console.log(one === 1)
console.log(one === "1") //ele agora diferencia se é numero o string

//estitamente diferente de !==
console.log("### estitamente Diferente de ###")
console.log(one !== two)
console.log(one !== 1)
console.log(one !== "1")

// operadores maior, menor ou igual
console.log("Operadores maior, menor ou igual")

let balance = 500
let payment = 120

// > maior que 
console.log(balance > payment)

// < menor que 
console.log(balance < payment)

balance = 120

// >= maior ou igual 
console.log(balance > payment)
console.log(balance >= payment)
console.log(balance <= payment)

//operadores de atribuição
console.log("operadores de atribuição")

// operador de atribuição 
value = 1
console.log(value)

//inclemento
value += 2
console.log(value)

//declemento
value -= 2
console.log(value)

//mulplicação 
value *= 6
console.log(value)

//divisão
value /= 2
console.log(value)

//Resto
value %= 2
console.log(value)

//exponenciação
value *= 3
console.log(value)
value **= 2
console.log(value)

//operadores logicos
console.log("operadores logicos")

let email = true
let password = true


//and (E) &&

console.log(email && password)
password = false
console.log(email && password)

//OR (ou) || 

console.log(email || password)

//NOT (negação) !

console.log(!password)




