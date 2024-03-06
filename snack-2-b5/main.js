console.log('ok');

const zucchine = [
    {
        lunghezza: 12,
        peso: 100
    },
    {
        lunghezza: 14,
        peso: 120
    },
    {
        lunghezza: 16,
        peso: 150
    },
    {
        lunghezza: 18
        , peso: 960
    },
    {
        lunghezza: 160,
        peso: 185
    },


    {
        lunghezza: 22,
        peso: 220
    },
    {
        lunghezza: 8,
        peso: 80
    },


];

const misuraSotto15 = zucchine.filter(zucchina => zucchina.lunghezza < 15)
console.log(misuraSotto15);
const misuraSopra15 = zucchine.filter(zucchina => zucchina.lunghezza > 15)
console.log(misuraSopra15);


let pesoTotalePiccole = 0;
misuraSotto15.forEach(zucchine => {
    pesoTotalePiccole+= zucchine.peso
});
console.log(pesoTotalePiccole);



let pesoTotaleGrandi = 0;
misuraSopra15.forEach(zucchine => {
    pesoTotaleGrandi+= zucchine.peso
});
console.log(pesoTotaleGrandi);

