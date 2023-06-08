// ----------------- Corpos das Funções --------------- //

function calcAreaRet(baseRet, hipRet){ 
  // Calcula a área do retângulo utilizando o comprimento da base e a hipotenusa
  let resposta = baseRet * hipRet;
  return (resposta); //retorna o valor calculado
}


// ------------------ Entradas dos dados -------------- //

// Se utilizado no navegador, é possível fazer uso do comando "prompt()" para gerar uma entrada

const b = 3; // Base do Retângulo
const h = 5; // Hipotenusa do Retângulo

// ---------------------------------------------------- //

// --------------- Execução da solução ---------------- //

let resposta = calcAreaRet(b, h); // Instância da função de cálculo da área
console.log("Área do Retângulo: " + resposta); // Mostra no console a resposta retornada pela função

// ---------------------------------------------------- //

//Nas próximas atividades, as descrições serão por bloco e não mais por linha