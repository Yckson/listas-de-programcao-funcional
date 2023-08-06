const gerarLimite = (limite = 1000) => [...Array(limite)].map((item, indice)=>{
  return indice+1;
});

const retornarMultiplos = (limite) => (valor) => {
  const multiplos = gerarLimite(limite).filter((item)=> item % valor == 0);
  return multiplos;
}

const somarLista = (lista) => lista.reduce((acc, item) => acc + item, 0);
const retornarMultMil = retornarMultiplos(1000);

const somaMultiplosTres = somarLista(retornarMultMil(3));
const somaMultiplosCinco = somarLista(retornarMultMil(5));

console.log(somaMultiplosCinco + somaMultiplosTres);

