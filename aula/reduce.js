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

const precosNum = precosFiltro.map(preco=>{
  console.log(preco);
  return Number.parseFloat(preco.replace("R$ ", ""));
});

const total = precosNum.reduce((acumulador, atual)=>{
  console.log(acumulador, atual);
  return acumulador + atual;
}, 0);

console.log(total);