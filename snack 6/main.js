console.log('hello');

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */


const footballTeams = [
    {
        name: 'Juventus',
        pointsDone: 0,
        fail: 0
    },
    {
        name: 'Milan',
        pointsDone: 0,
        fail: 0
    },
    {
        name: 'Argentina',
        pointsDone: 0,
        fail: 0
    },
    {
        name: 'Napoli',
        pointsDone: 0,
        fail: 0
    },
    {
        name: 'Fiorentina',
        pointsDone: 0,
        fail: 0
    }
];
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
//facciamo una function che ci darà i numeri random
function numberRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generiamo i numeri random per i punti e i fail e usiamo la function 
for(let team of footballTeams){
    team.pointsDone=numberRandom(1, 600)
    team.fail=numberRandom(1, 200)
}

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teamsFail = footballTeams.map(({name,fail}) => ({name,fail}))
console.log(teamsFail);

