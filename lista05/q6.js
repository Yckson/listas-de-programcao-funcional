const gerarNumeros = (inicial) => (final) => [inicial, ...[...Array(final-inicial)].map((item, indice)=>inicial+indice+1)];
const dezPrimeiros = gerarNumeros(1);

const soma = dezPrimeiros(10).reduce((item, acc) => acc + item, 0);
const somaquadrado = dezPrimeiros(10).map((item)=>item**2).reduce((item, acc)=>acc+item, 0);

console.log(soma - somaquadrado);