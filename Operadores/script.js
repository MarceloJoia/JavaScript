console.log("Operadores aritméticos [ + - * / % ** (exponenciação ES2016) ]");
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 3 = ${19 / 5}`);
console.log(`19 % 3 = ${19 % 5}`);
console.log(`3 ** 4 = ${3 ** 4}`);

console.log('');
console.log("Operadores comparativos [ < > <= >= ]");
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);



console.log('');
console.log('');
console.log("--> Operadores comparativos de igualdade <--");
console.log('Converte para um tipo em comum, depois compara: [ == != ] ==> ${"" == false}');
console.log(`"" == false: ${"" == false}`);

console.log('');
console.log('Compara levando em conta também o tipo: [ === !== ] ==> ${"" === false}');
console.log(`"" === false: ${"" === false}`);

console.log('');
console.log('object: compara referência: [ string, number, boolean: compara valor ] ==> ${"17" == 17} e ${"17" === 17}');
console.log(`"17" == 17: ${"17" == 17}`);
console.log(`"17" === 17: ${"17" === 17}`);


console.log('');
console.log("Operadores comparativos de igualdade");
const x = "Maria";
const y = "Maria";
const a = new String("Maria");//=> Função construtorab

const b = new String("Maria");
console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria"`);
console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typeof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);

console.log('');
console.log("Operadores lógicos [&& (E) || (OU) !(NÃO)]");
console.log(`(10 > 5) && (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`(10 > 5) && (10 < 20): ${(10 > 5) && (10 < 20)}`);
console.log(`(10 > 5) || (10 > 20): ${(10 > 5) || (10 > 20)}`);
console.log(`(10 < 5) || (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`!(10 > 5): ${!(10 > 5)}`);