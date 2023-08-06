module.exports = {
  gerarLimite: (limite = 1000) => [...Array(limite)].map((item, indice)=>{
    return indice+1;
  }),
  
}