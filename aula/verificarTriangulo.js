const verificarTipoTriagulo = (f1, f2, f3, a, b, c) => f1(a, b, c) + f2(a, b, c) + f3(a, b, c);

console.log(
  verificarTipoTriagulo(
    (a, b, c) => a == b && b == c ? "Equilátero" : '',
    (a, b, c) => a != b && b != c && a != c ? "Escaleno" : '',
    (a, b, c) => (a != b && a == c) || (b != c && a == b) || (c != a && a == b) ? "Isoceles" : '',
    4, 3, 2
  )
);

