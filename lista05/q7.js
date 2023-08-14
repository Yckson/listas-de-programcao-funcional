const gerarNumeros = (inicial) => (final) => [inicial, ...[...Array(final-inicial)].map((item, indice)=>inicial+indice+1)];
const todosNum = gerarNumeros(2);


const retornarPrimos = (max) => {
  const primos = todosNum(max).
}