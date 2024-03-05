/* //Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */


const persons = [
    {
        nome: "Marian",
        cognome: "Roman",
        eta: 60
    },
    {
        nome: "Maria",
        cognome: "Acri",
        eta: 20
    },
    {
        nome: "Alessandro",
        cognome: "Ambrosi",
        eta: 36
    },
    {
        nome: "Roxanne",
        cognome: "Stefani",
        eta: 27
    },
    {
        nome: "Medea",
        cognome: "Stefan",
        eta: 15
    },
    {
        nome: "Alba",
        cognome: "Nocce",
        eta: 80
    },
];


// usiamo map per ciclare dentro il array ed aggiungere le conditione e la frase da assegnare
const drivingcondition = persons.map(person => {
    let condition = person.nome + " " + person.cognome + " può guidare.";
    if (person.eta < 18) {
        condition = person.nome + " " + person.cognome + " non può guidare."

    }
    else if (person.eta > 70) {
        condition = person.nome + " " + person.cognome + " non può guidare."


    }
    return condition;
});

console.log(drivingcondition);