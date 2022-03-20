// 6- Faça um programa que leia 10 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

        var n1 = parseInt(prompt("Digite o primeiro número: "));
        var n2 = parseInt(prompt("Digite o segundo número: "));
        var n3 = parseInt(prompt("Digite o terceiro número: "));
        var n4 = parseInt(prompt("Digite o quarto número: "));
        var n5 = parseInt(prompt("Digite o quinto número: "));
        var n6 = parseInt(prompt("Digite o sexto número: "));
        var n7 = parseInt(prompt("Digite o sétimo número: "));
        var n8 = parseInt(prompt("Digite o oitavo número: "));
        var n9 = parseInt(prompt("Digite o nono número: "));
        var n10 = parseInt(prompt("Digite o décimo número: "));

        var resultado = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10)/2
        if (resultado){
            alert("Seus números informados foram "+ "n1 "+ n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);
        }
        if(resultado){
            alert("Seus números somado deu um total de " + (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) + " E o resultado da média aritmetica foi " + resultado )
         }