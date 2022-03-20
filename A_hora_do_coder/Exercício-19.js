// 19- Escreva um programa para ler o número de gols marcados pelo Grêmio e o número de gols marcados pelo Inter em um GRENAL. 
//Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

        var gremio = prompt("Quantos gols o Grêmio marcou?");
        var inter = prompt("Quantos gols o Inter marcou?");

        if (gremio == inter){
            alert("Ouve EMPATE! Jogo terminou " + gremio + "X" + inter)
        }

        if (gremio > inter){
            alert("O vencedor do jogo foi o Grêmio!")
        } 

        if (inter > gremio) {
            alert("O vencedor do jogo foi o Inter!")
        }