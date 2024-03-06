console.log('hi');


/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


const bike = [
    {
        name: 'Cervélo',
        weight:15
    },
    {
        name: 'Pinarello',
        weight: 7.1
    },
    {
        name: 'Colnago',
        weight: 6.8
    },
    {
        name: 'Giant',
        weight: 8
    },
    {
        name: 'Scott',
        weight: 6
    },
    {
        name: 'Bianchi',
        weight: 7
    },
    {
        name: 'Trek',
        weight: 8
    },
    {
        name: 'Cannondale',
        weight: 10
    },
    {
        name: 'Specialized',
        weight: 5
    }
];

//Stampare in console la bici con peso minore utilizzando destructuring e template literal :

let bikeLight = bike[0];

for ( let bikes of bike) {
    if (bikes.weight  < bikeLight.weight ) {
        bikeLight = bikes;
    } 
}

//estrarre dalla bike più leggera il parametri 
const { name , weight}=bikeLight;

console.log(`The lightest bike is: ${name} with a weight: ${weight}`);


let elementBike=document.getElementById('bikelight')

elementBike.innerHTML=`The lightest bike is: ${name} with a weight: ${weight}`;