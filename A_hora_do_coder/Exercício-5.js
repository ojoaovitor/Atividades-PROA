// 5- Faça um programa que leia dois valores informados pelo usuário e exiba uma das três mensagens a seguir: ‘Números iguais’,
// caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.

    var n1 = parseInt(prompt("Digite um número: "));
    var n2 = parseInt(prompt("Digite outro número: "));

    if (n1 == n2) {
        alert("Os número são iguais!")
    }

    if (n1 > n2) {
        alert("O primeiro é maior!")
    }

    if (n2 > n1 ) {
        alert("O segundo é maior!")
    }