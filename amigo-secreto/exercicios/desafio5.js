/*Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados.
Teste a função com novaLista e imprima o array resultante.*/

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);