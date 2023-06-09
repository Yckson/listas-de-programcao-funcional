//Q10. Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer, retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.
//-------------- Corpos das Funções ------------- //

  function conversorCitBib(pN, uN){
    //Esta função retorna a conversão dos dados fonecidos em forma de citação bibliográfica
    return `${pN} ${uN} --> ${uN}, ${pN}`;
  }

//----------------------------------------------- //
// -------------- Entrada dos Dados ------------- //

  const priNome = "William";
  const ultNome = "Braga";

// ---------------------------------------------- //
// ------------- Execução da solução ------------ //

  const resposta = conversorCitBib(priNome, ultNome);
  console.log("Conversão: " + resposta);

// ---------------------------------------------- //