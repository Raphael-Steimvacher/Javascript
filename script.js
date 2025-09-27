// Aula sobre template literals
/* 
    no JS é possivel concatenar texto e/ou usar comando no 
    meio do texto.
 */

    let user = "Raphael"
    let email = "RaphaelSteimvacher2251@gmail.com"
    let age = "24"

    // colocar mais de um parametro deve usar , no texto

    console.log (user, email, age, "teste")

    //concatenar texto tambem é possivel 

    let message = "olá, " + user + ". Vc conectou ao servidor com o email " + email

    console.log (message)

    // ou podemos usar o comando ${} para utilizar dentro do console.log ficando mais organizado.

    console.log (`
        Olá, ${user}.
        vc conectou ao servidor com o email ${email}
        `)

