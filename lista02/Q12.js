//Q12. Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau.
//-------------- Corpos das Funções ------------- //

function calcularRaizes(a, b ,c){
  const delta = (b**2 - 4*a*c);
  console.log(delta)
  if (delta < 0){
    return false;
  }

  return Array(((-b + delta**(1/2))/(2*a)), ((-b - delta**(1/2))/(2*a)))
}

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

const a = 3;
const b = 3;
const c = 0;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

const raizes = calcularRaizes(a, b, c);
console.log(raizes === false ? "Raízes Inexistentes!" : `x' = ${raizes[0]} | x'' = ${raizes[1]}`);

// ---------------------------------------------- //