// Definição das variaveis inicias
let indice = 13;
let soma = 0;
let k = 0;

// Chaha o loop que calcula a soma dos números de 1 a 13
while (k< indice) {
    k = k + 1; //Incremeta k
    soma = soma + k; //aqui adiciona 'k' a soma
}
// Exibindo o resultado
console.log("Valor da variavel soma é:", soma);


//SEGUNDO DESAFIO
//Cria função que verifica se o número pertence a sequecia de fibonacci
function verificaFibonacci(num) {
    let a = 0, b = 1;
    while (b< num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 0;
}
// Número para verificar
const numero = 21;

// Verificação da pertencente do número á sequência e exibir o resultado
if (verificaFibonacci(numero)) {
    console.log('${numero} pertence á sequência de Fibonacci.');
} else {
    console.log('${numero}NÂO pertence á sequência de Fibonacci.')
}


//TERCEIRO DESAFIO
// Dados de faturamento diário 
const faturamentoDiario = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 }, // Dia sem faturamento
    { dia: 5, valor: 0.0 }, // Dia sem faturamento
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 }, // Dia sem faturamento
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 }, // Dia sem faturamento
    { dia: 12, valor: 0.0 }, // Dia sem faturamento
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 }, // Dia sem faturamento
    { dia: 19, valor: 0.0 }, // Dia sem faturamento
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 }, // Dia sem faturamento
    { dia: 26, valor: 0.0 }, // Dia sem faturamento
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 }
];

// Apenas os dias com faturamento
const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

// O menor e o maior faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// A média mensal
const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

// Quantos dias tiveram faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

// Resultados
console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);


//QUARTO DESAFIO
// Faturamento por estado calculo
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Faturamento total calculo
const finalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Exibe o percentual de cada estado calculo
for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    const percentual = (valor / finalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


//QUINTO DESAFIO
// Função que inverte uma string
function inverterString(str) {
    let invertedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

// String como exemplo
const stringOriginal = "Hello, World!";

// Inverte exibe o resultado da string
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);