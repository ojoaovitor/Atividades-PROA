// 16- As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
//Escreva um programa que leia o número de maçãs compradas (considere que o usuário informará a quantidade), e calcule e escreva o valor total da compra.

        var maca = prompt("Quantas maçãs você comprou?: ");

        var valor_maca = 0.30;
        var valor_duzia = 0.25;

            if (maca > 12){
                alert("O valor total da compra foi R$ " + (maca * valor_duzia))
            }
            if (maca < 12) {
                alert("O valor total da compra foi R$ " + (maca * valor_maca))
            }