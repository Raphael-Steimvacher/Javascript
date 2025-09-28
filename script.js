// Funções

//A primeira função
// Argumentos é parametros
/*
-Parâmetros é a variavel (escopo da função) que irá receber um valor em uma função.
- Argumentos é o valor que é passado para a função.
*/
//passado o parâmetro username
function welcome(username){
    console.log("Seja bem Vindo!!!", username)
}
// passando argumentos 
welcome("Raphael")
welcome("Lara")
welcome("Alice")

function sum(a, b){
    console.log(a + b)
}

sum(2, 4)
sum(10, 5)
//Definindo um valor padrão para o argumento
function jointext(text1, text2 ="", text3 = "", text4 = ""){
    console.log(text1, text2, text3, text4)
}

jointext("Raphael", "Piccoli", "Lima", "Steimvacher")
//por conta do aspas vazia, não apareceu o undefined no console.
jointext("Raphael", "Piccoli")

//retornando valores de uma função

function sub(a,b){
    let result = a - b
    return result
}
let response = sub(4,2)
console.log(response)
console.log(sub(10,5))

//comentários de documentação
/* 
Comentário de documentação em JS (sintaxe de JSDoc).
O JSDoc é um padrão para incoporar documentação no codigo fonte 
a partir desses comentários,
*/

/**
 *Authenticates the user
 *
 * @param {string} email user email.
 * @param {string} password more than 6 caracteres.
 * @returns {number} user id.
 */
function signIn(email, password){
    //fluxo de autenticação do usuário
    let id = 2251
    return id
}

console.log(signIn("raphaelsteimvacher2251@gmail.com", "123456789"))

//função anônima (função que não tem nome)

const showMessage1 = function(){
    return "Olá, Raphael"
}

console.log(showMessage1())

const showMessage2 = function(message, name){
    return message + name
}

console.log(showMessage2("Olá, ","Raphael"))

//Arrow function (função de seta)

const showMessage3 = () =>{
    console.log("olá")
}
console.log(showMessage3)
showMessage3()

const showmessage4 = (username, email) =>{
    console.log(`Olá, ${username}. Seu email é: ${email}.`)
}
console.log(showmessage4("Raphael2251", "Raphaelsteimvacher2251@gmail.com"))
console.log(showmessage4("Raphael2251", "Raphaelsteimvacher2251@gmail.com"))

//callback Function: é uma função passada para outra função com um argumento.

function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName)
    callback()
}

function callback(){
    console.log("Tarefa finalizada")
}

//Passando para a função.
execute("Download do arquivo...", callback)

//Criando a função no proprio parâmetro (função anonima)
execute("upload do arquivo...", function(){
    console.log("função de calback com uma função anonima.")
})

// Utilizando uma arrow function
execute("Excluindo arquivo...", () =>{
    console.log("Arquivo excluido!")
})

