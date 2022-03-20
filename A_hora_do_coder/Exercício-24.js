// 24- Um zoológico muito louco
//Escreva um programa que leia a idade de 2 javalis e 2 girafas (considere que a idade dos javalis será sempre diferente, assim como das girafas ). 
//Calcule e escreva a soma das idades do javali mais velho com a girafa mais nova, e o produto das idades do javali mais novo com a girafa mais velha.

var javali1 = parseInt(prompt("Digite a idade do primeiro Javali: "))
       var javali2 = parseInt(prompt("Digite a idade do segundo Javali: "))

       var girafa1 = parseInt(prompt("Digite a idade da primeira girafa: "))
       var girafa2 = parseInt(prompt("Digite a idade da segunda girafa: "))

       var soma = 0

       if (girafa1 > girafa2){
            if (javali1 > javali2){
                alert("A soma da idade do Javali mais velho com a idade da Girafa mais nova é " + (javali2 + girafa1) + ", e a soma da Girafa mais nova com o Javali mais velho é " + (girafa2+javali1))
            }
        } else {
            alert("A soma da idade da Girafa mais nova com a idade do Javali mais novo é " + (javali1+girafa2) + ", e a soma da girafa mais velha com o Javali mais novo é " + (girafa1+javali2))
        }