//Exercício - 4 Machado de Assis

        var romances = ["Memorial de Aires (1908)", "Ressurreição (1872)", "Casa Velha (1885)", "Memórias Póstumas de Brás Cubas (1881)", "Helena (1876)", "Quincas Borba (1891)", "Esaú e Jacó (1904)", "A mão e a luva (1874)", "Dom Casmurro (1899)", "Iaiá Garcia (1878)"];
        var poesias = ["Americanas (1875)", "Ocidentais (1880)", "Falenas (1870)", "Crisálidas (1864)", "Poesias Completas (1901)"];
        var contos = ["Várias Histórias (1896)", "Histórias sem Data (1884)", "Papéis Avulsos (1882)", "Contos Fluminenses (1870)", "Histórias da Meia-Noite (1873)", "Relíquias de Casa Velha (1906)", "Páginas Recolhidas (1899)"];

        var livros =[];
        livros.push(romances [0]);
        livros.push(romances [1]);
        livros.push(romances [2] + "<br>");

        livros.push(poesias [0]);
        livros.push(poesias [1]);
        livros.push(poesias [2] + "<br>");

        livros.push(contos [0]);
        livros.push(contos [1]);
        livros.push(contos [2]);

        document.write(livros)  