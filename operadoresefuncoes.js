console.log("#################")

let nome = "Patrick";
let idade = 26;
let mensagem;

// maneira comum
// Operadores lógicos: > < >= <= != == ===
if (idade >= 18) {
    let mensagem = ("Olá, " + nome + ". Você é maior de idade");
} else {
    let mensagem = ("Olá, " + nome + ". Você é menor de idade");
}

// operador ternário
mensagem = idade >= 18 ? ("Olá " + nome + " Você é maior de idade") : ("Olá" + nome + "Você é menor de idade");

// template literals
mensagem = `Olá ${nome}, você tem ${idade} anos`;

console.log(mensagem);
console.log("#################")

let nota1 = 10;
let nota2 = 6;

// forma comum de escrever uma função
function media(n1, n2) {
    return (n1 + n2)/2;
}

// arrow function
let mediaArrow = (n1, n2) => (n1 + n2)/2;

console.log("A média é " + mediaArrow(nota1, nota2));

// IMC = peso/(altura x altura).


