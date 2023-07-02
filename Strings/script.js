console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);

//=> const num = 14.5;
console.log("Conversão entre number e string");
const str1 = num.toString();//=> Converte para String
console.log(`Tipo de ${str1}: ${typeof str1}`);


//=> Fixar 2 casas decimais
const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);


//=> Conver String para Número
const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

//=> Conver String para Número com base numérica com parseInt("", "10")
const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

//=> Conver String para Número com base exadecimal com parseInt("", "10")
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);


//=> Conver String para número com base flutante com parseFloat("21.34", 10)
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);

console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);
console.log(`charAt: ${str.charAt(3)}`);

console.log(`replace (primeiro): ${str.replace("i", "$", )}`);

//=> Usar expressaõ regular
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`);

//=> Propriedade length conta o número de letras
console.log(`length: ${str.length}`);

//=> Search na primeira ocorrencia da letra i
console.log(`indexOf: ${str.indexOf("i")}`);

//=> Busca a ultima ocorrencia da letra i -. Função()
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

//=> posção inicial e final
console.log(`subtring: ${str.substring(3, 8)}`);

console.log(`trim: ${str.trim()}`);