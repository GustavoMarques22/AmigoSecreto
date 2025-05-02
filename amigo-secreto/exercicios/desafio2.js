/*Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável.
Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.*/
// Declarando uma variável do tipo array

let minhaLista = [];

// Adicionando elementos com push
minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

// Criando uma nova variável
let outrosNumeros = [4, 5, 6];

// Concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando Arrays:", novaLista);