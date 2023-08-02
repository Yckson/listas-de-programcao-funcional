const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const aplicarTaxaC = (taxa)=>(carrinho)=>{
  return carrinho.map(
    (item) => {
      return {
        nome: item.nome,
        qtde: item.qtde,
        preco: (item.preco * taxa),
        fragil: item.fragil
      }
    }
  );
}

const calcularValorT = (fDesconto) => (carrinho) => carrinho.reduce((acumulador, item)=>{
  return acumulador + fDesconto(item.preco * item.qtde);
}, 0);

const aplicarTaxaDolar = aplicarTaxaC(0.21);

const desconto = (desc) => (valor) => { return (1 - desc/100) * valor};

const calcTotalSDesc = calcularValorT(desconto(0));

const agruparFragilidade = (fragil=true) => (carrinho) => carrinho.filter((item)=> item.fragil === fragil);
const separarFrageis = agruparFragilidade();
const separarNFrageis = agruparFragilidade(false);


const carrinhoFrageis = separarFrageis(carrinho);
const carrinhoNFrageis = separarNFrageis(carrinho);

const verificarInicial = (carrinho) => (inicial) => carrinho.filter((item)=> item.nome[0].toUpperCase() === inicial.toUpperCase());
const calcMedia = (valorT) => (qtd) => valorT / qtd;

const qtdDeProdutos = (carrinho) => carrinho.reduce((acumulador, atual)=> acumulador + atual.qtde, 0);

console.log(carrinho);

//a
console.log(aplicarTaxaDolar(carrinho));

//b
console.log(calcTotalSDesc(carrinho));

//c
console.log(calcularValorT(desconto(50))(carrinho))

//d
console.log(calcTotalSDesc(carrinhoFrageis));

//e
const itensInicioC = verificarInicial(carrinho)("c")
console.log(calcTotalSDesc(itensInicioC));

//f
const valorMedioFrageis = calcMedia(calcTotalSDesc(carrinhoFrageis))(qtdDeProdutos(carrinho))
const valorMedioNFrageis = calcMedia(calcTotalSDesc(carrinhoNFrageis))(qtdDeProdutos(carrinho))


console.log(valorMedioFrageis);
console.log(valorMedioNFrageis);
