// 22- A Loja Remi du Fromage está com uma promoção onde cada capacete artesanal para tartaruga custa R$18.230 e pode ser pago em até 15 vezes sem juros. 
//Crie um programa onde o usuário possa informar o valor parcelas que deseja pagar e exiba o valor de cada parcela.

        var parcela = prompt("Digite a quantidade de parcelas, você pode parcelar em até 15 vezes! ");

        var capacete = 18.230;

        var valor = capacete / parcela;

        if (valor){
            alert("O valor de parcelas que solicitou foi em " + parcela + " e o valor que irá pagar por cada parcela será de " + valor)
        }