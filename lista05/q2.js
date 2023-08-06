const pegarDoFinal = (voltar = 0) => (lista) => lista[lista.length - 1 - voltar];
const pegarPenul = pegarDoFinal(1);

const lista = ['Ana','Bia','Marcela','Carlos','Maria'];

console.log(pegarDoFinal()(lista));
console.log(pegarPenul(lista));