// 17- Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
//A senha válida é o número "1234" sem aspas. Devem ser impressas as seguintes mensagens: "ACESSO PERMITIDO" caso a senha seja válida. "ACESSO NEGADO" caso a senha seja inválida.

        var senha1 = prompt("Digite a senha de 4 digitos: ");

        var senha = 1234;

            if (senha1 != senha){
                alert("ACESSO NEGADO!")
            }
            if  (senha1 == senha) {
                alert("ACESSO PERMITIDO!")
            }