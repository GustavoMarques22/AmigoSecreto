/*Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. 
Pesquise e adapte o código para realizar o embaralhamento.*/

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Embaralhando novaLista
  novaLista = embaralharArray(novaLista);
  console.log("Embaralhando a Lista:", novaLista);