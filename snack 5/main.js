console.log('hi');


/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


const bike = [
    {
        name: 'Cervélo',
        weight: 6.2
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
        weight: 7.5
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
        weight: 6
    },
    {
        name: 'Specialized',
        weight: 7.5
    }
];

//Stampare in console la bici con peso minore utilizzando destructuring e template literal :

const bikeLight = bike[0];

for ( let bikes of bike) {
    if (bikes.peso < bikeLight.peso) {
        bikeLight = bike;
    } 
}

//estrarre dalla bike più leggera il parametri 
const { name , weight}=bikeLight;

console.log(`The lightest bike is: ${name} with a weight: ${weight}`);