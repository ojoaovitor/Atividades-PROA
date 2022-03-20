//Exercício - 3

        var drofo = ["Anel da invisibilidade", "Duas botas mágicas", "Poção do sono", "Duas poções da inocência"];
        var topper = ["Capa da invisibilidade", "Pedra do despertar", "Varinha das varinhas", "Uma Poção da inocência", "Duas poções da mentira", "Poção anti-inteligência"];

        //Jornada de Topper
        //Topper consumiu uma das poções da mentira. Ficou somente com uma.
        topper[4] = "Uma poção da mentira";

        //Perdeu sua pedra e ganhou um par de botar mágicas do Drofo.
        topper[1] = "Par de botas mágicos";

        //Achou um escudo mágico e uma espada mágica. 
        topper.push("Escudo mágico");
        topper.push("Espada mágica");

        //Jornada de Drofo
        //Usou sua poção do sono e consumiu a poção anti-inteligência do Torper.
        drofo.splice(2);
        topper.pop();

        //Encontrou um ovo de dragão e uma coxinha.
        drofo.push("Ovo de dragão");
        drofo.push("Coxinha");

        document.write("Items do Drofo sobrou " + drofo  + "<br>");
        document.write("Items do Topper sobrou " + topper);