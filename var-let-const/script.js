const x = 10;

if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log("Imprimindo dentro do if:");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("Imprimindo fora do if:");
console.log("Vazando o escopo da estrutura de controle if(){...}: " + a);
// console.log(b); //=> Não vaza o Escopo
// console.log(c);

console.log("Imprimindo resultado do for: ");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// console.log(i); //=> let não permite mudar o valor de uma constante