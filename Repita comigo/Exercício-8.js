//Exercício - 8
//Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

            var n1 = parseFloat(prompt("Digite a primeira nota da sua avaliação: "));
            var n2 = parseFloat(prompt("Digite a segunda nota da sua avaliação: "));

            var media = (n1 + n2) / 2;

            while(n1 > 10 && n2 > 10){
                alert("Nota invalida, digite novamente suas notas.");
                var n1 = parseFloat(prompt("Digite a primeira nota da sua avaliação: "));
                var n2 = parseFloat(prompt("Digite a segunda nota da sua avaliação: "));
                var media = (n1 + n2) / 2;
            }

            if (media > 6){
                alert("Sua média foi " + media)
            }

            if (media < 6){
                    alert("Sua média foi " + media)
            }