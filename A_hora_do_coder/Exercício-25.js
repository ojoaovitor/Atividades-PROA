// 25- Uma micro calculadora
//Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
//executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
//O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
//que só serão lidos os valores 1, 2, 3 ou 4 para as operações.

       var n1 = parseInt(prompt("Digite um número de 1 a 4: "))
       var n2 = parseInt(prompt("Digite outro número de 1 a 4: "))

       var adicao = n1 + n2;
       var subtracao = n1 - n2;
       var divisao = n1 / n2;
       var multiplicacao = n1 * n2;


        if (adicao){
            alert("A soma de " + n1 + "+" + n2 + " é " + adicao)
        }

        if (subtracao){
            alert("A subtração de " + n1 + "-" + n2 + " é " + subtracao)
        }

        if (divisao){
            alert("A divisão de " + n1 + "/" + n2 + " é " + divisao)
        }

        if (multiplicacao){
            alert("A multiplicação de " + n1 + "*" + n2 + " é " + multiplicacao)
        }