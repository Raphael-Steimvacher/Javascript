// Aula sobre scope e hosting
/* var é mais usado para declaração de variaveis globais
enquanto o let e const são mais utilizados para declaração
de variaveis em blocos.
A separação de global e blocos é feita com {    }, onde 
fora das chaves é o scope global e dentro da chaves é o scope
do bloco.   */

var user = "raphael"
let email = "criptoalien2251@gmail.com"

console.log (email)
{
    let email = "raphaelSteimvacher2251@gmail.com"
    let age = "24"
    let adreess = "av. sueo haguihara"
    const number = "50"
    console.log (user)
    console.log (email)
    console.log (age)
    console.log (adreess)
    console.log (number)
}

console.log (email)



