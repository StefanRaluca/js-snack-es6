console.log('ok');


/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe. */

const animals = [
    {
        nome: "Leone",
        famiglia: "Felidi",
        classe: "Mammiferi"
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: "Orso",
        famiglia: "Ursidi",
        classe: "Mammiferi"
    },
    {
        nome: "Aquila",
        famiglia: "Accipitridi",
        classe: "Uccelli"
    },
    {
        nome: "Coniglio",
        famiglia: "Cuniculus ",
        classe: "Mammiferi"
    },
];
//Crea un nuovo array con la lista dei mammiferi.
//usiamo filter con la function arrow
const mammals = animals.filter(animal => animal.classe === "Mammiferi"
);
console.log(mammals);
