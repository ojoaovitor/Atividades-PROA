// 18- Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, 
//construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

        var genero = prompt("Qual seu gênero sexual (F/M)?");
        var h = Number = prompt("Qual a sua altura?");

        var M = (72.7 * h) - 58;
        var F = (62.1 * h) - 44.7;

        if (genero == 'F'){
            alert("Seu peso ideial é " + F.toFixed(1))
        }else{
            alert("Seu peso ideal é " + M.toFixed(1))
        }