// 11- Um motorista de táxi deseja calcular o rendimento de seu carro na praça.
//Sabendo-se que o preço do combustível é de R$ 2,90, escreva um programa para ler: a marcação do odômetro (Km) no início do dia, a marcação (Km) no final do dia, 
//o número de litros de combustível gasto e o valor total (R$) recebido dos passageiros. Calcular e escrever: a média do consumo em Km/L e o lucro (líquido) do dia.

        var odometro = parseFloat(prompt("Digite a númeração do odômetro no começo do dia em KM: "));
        var fdia = parseFloat(prompt("Digite a númeração do odômetro no final do dia em KM: "));
        var combustivel = parseFloat(prompt("Quantos litros de combustivel foi gasto?"));
        var valor = parseFloat(prompt("Valor total recebido pelos passageiros? "));

        var gasto = combustivel * 2.90;

        if(gasto - valor){
            alert("Valor líquido recebido foi " + (gasto - valor));
        } 
        if (fdia / combustivel){
            alert("A média do consumo foi: " + (fdia / combustivel));
        }