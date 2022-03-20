// 23- Faça um programa em que o usuário informe 20 valores e no final, escreva o maior e o menor valor lido.

window.alert("Informe 20 valores")
        var array = []

        for(var c = 1; c<=20; c++){
            var n1 = parseInt(window.prompt("Informe o " + c +  " valor"))
            array.push(n1)
        }
        var maior = Math.max(...array)
        var menor = Math.min(...array)

        window.alert("O maior número informado é " + maior +", o menor numero infomado é " + menor)