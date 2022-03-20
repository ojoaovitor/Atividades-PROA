// 10- Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. 
//No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente".

        var n1 = parseInt(prompt("Digite o primeiro número de 1 a 10: "));
        var n2 = parseInt(prompt("Digite o segundo  número de 1 a 10: "));
        var n3 = parseInt(prompt("Digite o terceiro número de 1 a 10: "));
        var n4 = parseInt(prompt("Digite o quarto  número de 1 a 10: "));

        var media = (n1 + n2 + n3 + n4) / 4;

        if(media > 5){
            alert("Você passou no teste!");
        } 
        if (media < 5){
            alert("Tente novamente :( ");
        }