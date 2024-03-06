
console.log('ok');
const zucchine = [
    {
        varieta: "Zucchina nera",
        peso: 200,
        lunghezza: 15
    },
    {
        varieta: "Zucchina romanesca",
        peso: 180,
        lunghezza: 14
    },
    {
        varieta: "Zucchina siciliana",
        peso: 150,
        lunghezza: 12
    },
    {
        varieta: "Zucchina trombetta",
        peso: 220,
        lunghezza: 17
    },
    {
        varieta: "Zucchina lunga",
        peso: 190,
        lunghezza: 16
    },
    {
        varieta: "Zucchina tonda",
        peso: 170,
        lunghezza: 13
    },
    {
        varieta: "Zucchina verde",
        peso: 185,
        lunghezza: 16
    }
];

function pesoTotale(zucchine) {
    let sum = 0;
    for (let zucchina of zucchine ) {
        sum += zucchina.peso
        
    }
    return sum;
}
const pesoZucchine = pesoTotale(zucchine)

console.log(pesoZucchine);

