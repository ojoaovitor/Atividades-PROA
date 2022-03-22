// Exercício - 1
//Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for ZERO, 
//deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero nem negativo e 
//imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido.

    var n1 = parseFloat(prompt("Digite o primeiro valor."));
    var n2 = parseFloat(prompt("Digite o segundo valor, ele não pode ser 0."));

    while(n2 <= 0){
        alert("Número invalido, digite um maior.")
        var n1 = parseFloat(prompt("Digite o primeiro valor."));
        var n2 = parseFloat(prompt("Digite o segundo valor, ele não pode ser 0."));
    }

    var divisao = n1 / 2;
    alert("O resultado da divisão dos valores dados é " + divisao);