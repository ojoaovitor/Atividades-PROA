//Exercício - 6
//Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. 
//Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. 
//Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

        var resposta = "s";
        var aprovado = 0;
        var reprovado = 0;

        while (resposta === "s"){
            var n1 = parseFloat(prompt("Digite a primeira nota: "));
            var n2 = parseFloat(prompt("Digite a segunda nota: "));
            var media = (n1 + n2) / 2;
            if (media > 6){
                alert("Aluno aprovado!");
                aprovado++
            } else {
                alert("Reprovado :(")
                reprovado++
            }
            var resposta = prompt("Deseja calcular a média de outro aluno? Digite S ou N.");

            if(resposta === "n"){
                alert("Obrigado!");
            }
        }

            alert("Numero de alunos aprovados " + aprovado);
            alert("Número de alunos reprovados " + reprovado);      