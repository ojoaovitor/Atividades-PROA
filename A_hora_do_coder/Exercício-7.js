// 7- Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, 
//o último e o maior de todos eles (considere que todos os números informados serão diferentes)

        var n1 = parseInt(prompt("Digite o primeiro número: "));
        var n2 = parseInt(prompt("Digite o segundo número: "));
        var n3 = parseInt(prompt("Digite o terceiro número: "));
        var n4 = parseInt(prompt("Digite o quarto número: "));

            alert("O primeiro número informado foi " + n1 );
            alert("O último número informado foi " + n4)

            if (n1 > n2 && n1 > n3 && n1 > n4) {
                alert("O maior número informado foi " + n1)
            }

            if (n2 > n1 && n2 > n3 && n2 > n4){
                alert("O maior número informado foi " + n2)
            }

            if (n3 > n1 && n3 > n2 && n3 > n4){
                alert("O maior número informado foi " + n3)
            }

            if (n4 > n1 && n4 > n2 && n4 > n3){
                alert("O maior número informado foi " + n4)
            }