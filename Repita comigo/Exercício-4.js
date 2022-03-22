//Exercício - 4
//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

        var soma = 0;
        var media = [];
        for(var x = 15; x <= 100; x++){
            media.push(x);
        }

        for(var x = 0; x < media.length; x++){
            soma += media[x]
        }

        alert("A soma dos valores entre 15 e 100 é " + soma + " e a média aritmética desses números é " + soma/(media.length-1) );