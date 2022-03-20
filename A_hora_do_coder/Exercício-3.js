// 3- Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
var n1 = parseInt (prompt("Digite um número: "));
var n2 = parseInt (prompt("Digite outro número: "));
var n3 = parseInt (prompt("Digite mais um número: "));

    if(n1 > n2 && n1 > n3) {
        alert("Este número é o maior: " + n1)
    }
    if(n1 >  n3 && n2 > n3) {
        alert("Este número é o maior: " + n2)
     }
    if(n1 && n2 <n3) {
        alert("Este número é o maior: " + n3)
    }