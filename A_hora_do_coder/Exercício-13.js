// 13 e 14- Escreva um programa para ler as notas das 4 avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: PARABÉNS! Você foi aprovado! 
//somente se o aluno foi aprovado (considere 6.0 a média mínima para aprovação e 4 notas informadas).
//Acrescente ao exercício anterior a mensagem "Infelizmente, você foi reprovado!" caso a média calculada seja menor que 6.0.

        var nota1 = prompt("Digite a primeira nota da sua avaliação: ");
        var nota2 = prompt("Digite a segunda nota da sua avaliação: ");
        var nota3 = prompt("Digite a terceira nota da sua avaliação: ");
        var nota4 = prompt("Digite a quarta nota da sua avaliação: ");

        var media = (nota1 + nota2 + nota3 + nota4)/2

            if (media > 6.0){
                alert("PARABÉNS! você foi aprovado!")
            }
            if (media < 6.0) {
                alert("Infelizmente, você foi reprovado!")
            }