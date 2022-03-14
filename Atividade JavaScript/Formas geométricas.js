// Exercício formas geometricas

//Retangulo
var base= prompt('Informe um valor da base do retângulo');
var altura= prompt('Informe um valor da altura do retângulo');
alert('O valor da área do retângulo é ' + (base*altura));

//Quadrado
var lado = prompt("Digite o valor dos lados do quadrado");
var area1 = lado*lado;
alert('A área do quadrado é ' + area1);

//Losango 
var diagonal1 = prompt('Digite o valor da diagonal 1: ');
var diagonal2 = prompt('Digite o valor da diagonal 2: ');
var area2 = (diagonal1 * diagonal2) /2;
alert('A área do losango é ' + area2);

// Trapézio 
var basemaior = prompt('Digite o valor da base menor; ');
var basemenor = prompt('Digite o valor da base menor: ');
var h = prompt('Digite o valor do h:');
var area3 = (basemaior + basemenor)*h/2;
alert('A área do trapézio é ' + area3);

//Paralelogramo
var base1 = prompt('Digite o valor da base: ');
var altura1 = prompt('Digite o valor da altura: ');
alert('A área do paralelogramo é ' + (base1*altura1));

//Triangulo
var base2 = prompt('Digite o valor da base do triangulo: ');
var altura2 = prompt('Digite o valor da altura do triangulo: ');
var area4 = (base2*altura2) /2;
alert('A área do triangulo é ' + area4);

//Circulo
var raio = prompt('Digite o valor do raio do círculo: ');
var area5 = 3.14(raio**2);
alert('A área do círculo é ' + area5);
