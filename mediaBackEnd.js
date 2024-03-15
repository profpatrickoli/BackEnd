let notas = [8.0, 10.0, 5.0, 5.0, 7.0, 6.0];
/*
notas[0] -> Prova (0.0 a 10.0)           -> Peso 35% (0,35)
notas[1] -> Alura (0.0 a 10.0)           -> Peso 15% (0,15)
notas[2] -> Laboratório (0.0 a 10.0)     -> Peso 35% (0,35)
notas[3] -> Caderno (0.0 a 10.0)         -> Peso 15% (0,15)
notas[4] -> R1 (substitui Prova + Alura) -> Peso 50% (0,50)
notas[5] -> R2 (substitui Lab. + Caderno)-> Peso 50% (0,50)

Objetivo: criar um sistema para calcular a média utilizando
este array. Recuperação 1 e Recuperação 2 apenas substituem
a nota caso sejam maiores que as de AV1(Prova + Alura) e AV2
(Laboratório + Caderno).
Data limite: 19/03/2024
Array de teste para avaliação: 
let notas = [8.0, 10.0, 5.0, 5.0, 7.0, 6.0];
Média = 7,3
*/
function calculaMedia() {
    // Comece calculando a média utilizando apenas as avaliações, para encontrar a fórmula;
    // Depois que sua fórmula estiver funcionando, crie as verificações de Recuperação > Avaliações;
    // Por fim, altere a fórmula para utilizar a nota correta para cada caso (R1>AV1 ou R2>AV2 ou nenhum dos casos)
    // Exemplo de cálculo do peso da nota:
    //      João tirou 6,0 na Prova (que vale 35% da nota total) e 10,0 no Alura (que vale 15% da nota total):
    //      nota AV1 = (6,0 * 0,35) + (10,0 * 0,15)
    //      nota AV1 =     2,1      +      1,5
    //      nota AV1 =             3,6
}
console.log(calculaMedia());