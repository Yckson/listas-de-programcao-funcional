const exec = (f, raio) => f(raio);
const calcularAreaCirc = (raio, pi=3.14) => pi * raio ** 2;

console.log(exec(calcularAreaCirc, 2))

console.log(exec(((raio) => 3.14 * raio ** 2), 2));