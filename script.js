// Condicionais e Controle de fluxo

//operador condicional ternário 
console.log("Operador condicional Ternário")

let age = 16

console.log(
    age >= 18 // 1- condição
    ? "Você pode dirigir." // 2 - Se verdadeiro
    : "Você não pode dirigir." // 3 - Se falso
)

console.log(
    age < 18 // 1- condição
    ? "Você não pode dirigir." // 2 - Se verdadeiro
    : "Você pode dirigir." // 3 - Se falso
)

// Falsy e Truthy
/*
Falsy é quando um valor é considerado false e Thuthy 
é quando é considerado veradeiro em contexto onde um 
boolean é obrigatório (condicionais e loops)
*/
console.log("Falsy e Truthy")

console.log("### EXEMPLOS DE FALSY ###")
console.log(false ? "VERDADEIRO" : "FALSO")
console.log(0 ? "VERDADEIRO" : "FALSO")
console.log(-0 ? "VERDADEIRO" : "FALSO")
console.log("" ? "VERDADEIRO" : "FALSO")
console.log(null ? "VERDADEIRO" : "FALSO")
console.log(undefined ? "VERDADEIRO" : "FALSO")
console.log(NaN ? "VERDADEIRO" : "FALSO")

console.log("### EXEMPLOS DE THUTHY ###")
console.log(true ? "VERDADEIRO" : "FALSO")
console.log({} ? "VERDADEIRO" : "FALSO")
console.log([] ? "VERDADEIRO" : "FALSO")
console.log(1 ? "VERDADEIRO" : "FALSO")
console.log(22.5 ? "VERDADEIRO" : "FALSO")
console.log("0" ? "VERDADEIRO" : "FALSO")
console.log("Raphael" ? "VERDADEIRO" : "FALSO")
console.log("false" ? "VERDADEIRO" : "FALSO")
console.log(-1 ? "VERDADEIRO" : "FALSO")
console.log(Infinity ? "VERDADEIRO" : "FALSO")
console.log(-Infinity ? "VERDADEIRO" : "FALSO")

// Condição IF (SE)
console.log("### CONDIÇÃO IF (SE)")

let hour = 20

if(hour <=12){
    console.log("Bom Dia")
    console.log("Seja Bem-Vindo")
}

//Condição IF (SE) ELSE (SE NÃO)
console.log("### CONDIÇÃO IF (SE) ELSE (SE NÃO)")

if (age >= 18){
    console.log("Você pode Dirigir.")
}else{
    console.log("Voce não pode dirigir")
}

//Condição IF ELSE IF
console.log("### CONDIÇÃO IF ELSE IF ###")

//Estrutura 1
if (hour <= 12){
    console.log("Bom Dia")
}
else if(hour > 18){
    console.log("Boa Noite")
}
else if(hour > 12){
    console.log("Boa Tarde")
}

//Estrutura 2

if (hour <= 12){
    console.log("Bom Dia")
}else if(hour >12 && hour <=18){
        console.log("Boa Tarde")
    }else{
            console.log("Boa Noite")
        }

//ESTRUTURA SWITCH CASE
console.log("### ESTRUTURA SWITCH CASE ###")

let option = 2

switch(option){
    case 1:
        console.log("Consultar pedido")
        console.log("aguardar...")
        break
    case 2:
        console.log("Falar com atendente")
        break
    case 3:
        console.log("cancelar pedido")
        break
    default:
        console.log("Opção Inválida, tente novamente!")
}

// ESTRUTURA DE TRY CATCH
/* é uma estrutura que é utilizada para evitar
que a aplicação trave e feche, utilizada em situações
em que a aplicação não depende so do seu codigo, 
mas precisa de algo externo como por exemplo:
quando preciso acessar algo que esta fora do meu codigo
ou o usuário pode colocar um informação que não é valida.
E assim por diante.
*/
console.log("### ESTRUTURA DE TRY CATCH ###")

try {
    //TENTA executar algo
    console.log(result)
} catch (error) {
    /*se não conseguir executar vc entra
no catch e captura o erro para tratar */
    //console.log(error)    
    console.log("Não foi possivel executar seu pedido. Tente novamente mais tarde")
} finally {
    /* o finally é opcional, onde ele idependente
    de executar oq está no bloco try ou no cacth
    ele vai executar depois oq esta aqui nesse bloco.
    */
    console.log("Fim")
}

let x = 0

try {
    if (x === 0) {
        throw new error("O valor é igual a zero.")
    }
} catch (error) {
    console.log(error)
} finally {
    console.log("Fim")
}



