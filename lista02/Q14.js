//Q14. Faça um programa que escreva por extenso um determinado algarismo passado como argumento.
//-------------- Corpos das Funções ------------- //

function verificarAlgarismo(num){
  const algarismosExt = Array(
   "ZERO",
   "UM",
   "DOIS",
   "TRÊS",
   "QUATRO",
   "CINCO",
   "SEIS",
   "SETE",
   "OITO",
   "NOVE"
   );

   return algarismosExt[num];
}

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

const algarismo = 5;

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

const algarismoExt = verificarAlgarismo(algarismo);
console.log(`O algarismo ${algarismo} por extenso lê-se como: ${algarismoExt}`);

// ---------------------------------------------- //