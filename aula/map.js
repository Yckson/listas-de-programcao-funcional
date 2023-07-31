const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

const precosNum = (precos.filter(preco => preco.includes("R$"))).map(preco=>{
  console.log(preco);
  return Number.parseFloat(preco.replace("R$ ", ""));
});

console.log(precosNum);