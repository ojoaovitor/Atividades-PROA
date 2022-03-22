//Exercício - 13
//Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

        var n1 = parseInt(window.prompt('Digite um número'));

        var t = 1;

        while(t <= n1){
            document.write('<h1> Tabuado do ' + t + '</h1>')
            var c = 1;
            while(c <= 10){
                document.write(t + ' x ' + c + ' = ' + c*t +'<br>')
                c++
            }
            t++
        }