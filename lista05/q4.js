const compararListas = (lista1) => (lista2) => {
  const qtdElementos = lista1.reduce((acc, item)=>{
    return lista2.indexOf(item) != -1 ? 1 + acc : acc;
  }, 0);

  return qtdElementos;
}

lista1 = ['Ana', 'Marcela'];
lista2 = ['Bia', 'José', 'João'];

console.log(compararListas(lista1)(lista2));