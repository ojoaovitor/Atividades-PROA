//Exercício - 2

    alert("Me informe 12 números: ")

        var numeros50 = [];
        var numeros_50 = [];

        for (var x = 1; x <= 12; x++){
            var n1 = parseInt(prompt("Digite o " + x + "º número"));
            if (n1 < 50){
                numeros_50.push(n1)
            }else{
                numeros50.push(n1)
            }
        }
            alert("Os números menores que 50 foram " + numeros_50);
            alert("Os números maiores que 50 foram " + numeros50);