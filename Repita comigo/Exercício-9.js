//Exercício - 9
//Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). 
//Considereque o N será sempre maior que ZERO.
//N  é um valor informado pelo usuário.

            var contagem = parseInt(prompt("Digite um número")); 

            while(contagem > 0) {
                    document.write(contagem + "<br>");
                    contagem--;
                }
                document.write("Essa contagem acabou!");