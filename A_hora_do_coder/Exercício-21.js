// 21- Escreva um programa que leia as notas das duas avaliações normais e a nota da avaliação optativa. Calcular a média do semestre considerando que a prova optativa substitui a nota mais baixa entre as duas primeiras avaliações. 
//Escrever a média e mensagens que indiquem se o aluno foi aprovado, reprovado ou está em exame, de acordo com as informações abaixo:

        var prova1 = prompt("Qual foi sua nota na primeira avaliação? ");
        var prova2 = prompt("Qual foi sua nota na segunda avaliação? ");
        var opta = prompt("Qual a sua nota da avaliação optativa?")

        var media = (prova1 + prova2)/2

        if (media >= 6.0){
            alert("Você foi APROVADO! ")
        } 

        if (media < 3.0) {
            alert("Você foi REPROVADO!")
        }

        if (media >= 3.0 && 6.0){
            alert("Você está em EXAME! ")
        }