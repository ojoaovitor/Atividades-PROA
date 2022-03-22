//Exercício - 14
// Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 
//(incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

        var dentro_intervalo = 0;
        var fora_intervalo = 0;
        var c = 1;

        while (c <= 10){
            var n1 = prompt("Digite o" + c + "º número.");
            c++
            if(n1 < 24 || n1 > 42){
                fora_intervalo++
            } else {
                dentro_intervalo++
            }

        }
            alert("A quantidade de número inseridos que estão dentro do intervalo de 24 a 42 é " + dentro_intervalo + " e os que estão fora são " + fora_intervalo);