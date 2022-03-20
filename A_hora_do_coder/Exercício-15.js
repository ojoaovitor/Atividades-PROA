// 15-  Escreva um programa para ler o ano de nascimento de uma pessoa 
//e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

        var ano = prompt("Em que ano você nasceu?: ");

            if (ano >= 2006){
                alert("Você não pode votar, muito novo!")
            }
            if (ano < 2006) {
                alert("Você poderá votar!")
            }