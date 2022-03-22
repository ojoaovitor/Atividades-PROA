//Exercício - 7
//Ler dois valores e imprimir uma das três mensagens a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro.

        var resposta = "s";

        while (resposta == "s"){
            var n1 = parseFloat(prompt("Digite um numero: "));
            var n2 = parseFloat(prompt("Digite outro numero: "));

            if (n1 > n2){
                alert("O primeiro número é maior");
            } 
            if(n2 > n1) {
                alert("O segundo número é maior");
            }else{
                alert("Os dois são iguais")
            }
            var resposta = prompt("Deseja ir novamente? Digite S ou N.");

            if(resposta == "n"){
                alert("Obrigado!");
            }
        }