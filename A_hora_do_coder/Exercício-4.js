// 4- Faça um programa que leia 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

    var x = parseInt(prompt("Digite um número: "));
    var y = parseInt(prompt("Digite outro número: "));
    var z = parseInt(prompt("Digite mais um número: "));


    if(x > y && x > z) {

        if(y > z){
            alert("A soma dos maiores é " + (x + y))
        }
        else
            alert("A soma dos maiores é " + (x + z))
    }
    if(y >  x && y > z) {

        if (x > z) {
            alert("A soma dos maiores é " + (y + x))
        }
        else{
            alert("A soma dos maiores é " + (y + z))
        }
    }
    if(z > y && z > x) {

        if(y > x){
            alert("A soma dos maiores é " + (z + y))
        }
        else{
            alert("A soma dos maiores é "  + (z + x))
        }
    }