// 9- Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. 
//Escreva o valor final da soma efetuada e também todos valores que o usuário informou.

        var n1 = parseInt(prompt("Digite o primeiro número: "));
        var n2 = parseInt(prompt("Digite o segundo número: "));
        var n3 = parseInt(prompt("Digite o terceiro número: "));
        var n4 = parseInt(prompt("Digite o quarto número: "));
        var n5 = parseInt(prompt("Digite o quinto número: "));
        var n6 = parseInt(prompt("Digite o sexto número: "));

        var resultado = (n1 + n2 + n3 + n4 + n5 + n6);

            alert("Os 6 número digitados foram " + n1 + n2 + n3 + n4 + n5 + n6);

        if(n1,  n2,  n3, n4, n5 , n6 < 72){
            alert("A soma desses números foram " + (n1 + n2 + n3 + n4 + n5 + n6));
        } 
        if (n1,  n2,  n3, n4, n5 , n6 > 72) {
            alert("Os números não serão somados");
        }