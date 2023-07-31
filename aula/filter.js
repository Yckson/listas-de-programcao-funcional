const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

const precosFiltro = precos.filter((preco)=>{
  return preco.includes("R$");
});

console.log(precosFiltro);