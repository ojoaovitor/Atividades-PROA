// 12- A equipe Mercedes deseja calcular o número mínimo de litros que deverá colocar no tanque de seu carro para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento.
//Escreva um programa que leia o comprimento da pista (em metros), o número total de voltas a serem percorridas no grande prêmio, 
//o número de reabastecimentos desejados e o consumo de combustível do carro (em Km/L). 
//O programa deve calcular e exibir o número mínimo de litros necessários para percorrer até o primeiro reabastecimento. 
//Observação: considere que a quantidade de voltas entre os reabastecimentos é o mesmo, mas não poderá ser maior ou igual a 2. 
//O usuário deve informar a quantidade de quilômetros total do circuito e a quantidade de litros que o carro pode possuir. 

        var tamanhoPista = parseInt(prompt("Informe o tamanho da pista (em metros)"));
        var voltas = parseInt(prompt("Informe o numero de voltas"));
        var numReabastecimento = parseInt(prompt("Quantos reabastecimentos deseja fazer"));
        var consumoCarro = parseInt(prompt("Qual o consumo do carro (km/l)"));

        var voltasParada1 = voltas/numReabastecimento;

        var distanciaParada1= (voltasParada1 * tamanhoPista) / 1000;

        var consumoParada1 = consumoCarro * distanciaParada1;

        alert("a distancia percorrida até a primeira parada é: " + distanciaParada1.toFixed(1));

        alert("O numero de voltas até a primeira parada é: " + voltasParada1.toFixed(1));

        alert("O carro vai gastar " + consumoParada1 + "litros até a parada 1");