// Exercício - 2
//Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. 
//Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

            var contagem = 30; 

            while(contagem >= 0) {
                if (contagem == 0) {
                    document.write("EXPLOSÃO <br>");
                } else {
                    document.write("A bomba vai detonar em: " + contagem + "<br>");
                }
                contagem--;
            }