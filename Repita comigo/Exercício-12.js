//Exercício - 12
// Escreva um algoritmo que calcule e imprima a tabuada do número informado pelo usuário (de 1 a 10).

            var n1 = prompt("Digite um número e veja sua tabuada:");
            var c = 0;
            while(c <= 10){
                document.write(n1 + "X" + c + "=" + (n1*c) + "<br>");
                c++;
            }