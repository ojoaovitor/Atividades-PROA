//Exercício - 5
//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros informados pelo usuário. 
//Considere que o primeiro sempre será menor que o segundo.

        var n1 = parseInt(prompt("Digite um número: "));
        var n2 = parseInt(prompt("Digite outro número: "));

        while (n1 > n2){
            alert("O primeiro número não pode ser maior que " + n2);
            var n1 = parseInt(prompt("Digite o primeiro número novamente: "));
            var n2 = parseInt(prompt("Digite o segundo número novamente: "));
        }

        alert("o resultado da soma desses números é " + (n1+n2) + " e média aritmética é " + (n1+n2) / 2);