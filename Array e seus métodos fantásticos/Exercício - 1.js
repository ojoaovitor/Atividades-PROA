//Exercício - 1

    alert("Me informe 20 números: ")

        var numeros = [];

        for (var x = 1; x <= 20; x++){
            var n1 = parseInt(prompt("Digite o " + x + "º número"));

            numeros.push(n1)
        }
            alert("Os números informados foram " + numeros);