// 20-  Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm).
//Calcular e imprimir o seguinte: 
//Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor do seu perímetro. 
//Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
//Se o número de lados for igual a 5 escrever PENTÁGONO. 
//Observação: Considere que o usuário só informará os valores 3, 4 ou 5. 
//Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO. 
//Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO.

        var lado = prompt("Digite a quantidade de lados do polígono: ");
        var medida = prompt("Digite a medida do lado em CM: ");

        var T = medida * 3
        var Q = medida * 4

        if (lado == 3){
            alert("TRIÂNGULO  e seu perímetro é " + T)
        } 

        if ( lado < 3) {
            alert("NÃO É UM POLÍGONO!")
        }

        if (lado == 4){
            alert("QUADRADO e sua área é " + Q)
        }

        if (lado == 5) {
            alert("PENTÁGONO")
        } 

        if (lado > 5) {
            alert("POLÍGONO NÃO IDENTIFICADO!")
        }