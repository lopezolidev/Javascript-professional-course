// console.log('Hello world')


function add(a: number, b: number) {
    return a + b;
}

const suma = add(1,4)

//basic types
//Boolean

let boolean:boolean = true;
boolean:boolean = false;

//Numbers

let age:number = 6;
let numerator:number = 42;
let denominator = age;
let result = numerator / denominator;

//Strings

let nombre:string = 'Sergio';
let saludo = `Hi, my name is ${nombre}`;

//Arrays
//de 1 solo tipo
let people: string[] = [];
people.push("Laura", "Nicole", "Gustavo");
// people.push(9000);

//de mas de un tipo
let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push(9000, "kerry", 756464, "Jay");

//Enums, algo como objetos estáticos que no van a cambiar

enum Colors{
    Red = 'rojo',

    Green = 'verde',

    Blue = 'azul',

    Yellow = 'amarillo',

    Orange = 'naranja',

    Purple = 'purpura'
}

//llamando a un elemento del enum
let favoriteColor: Colors = Colors.Yellow
console.log(`My favorite color is ${favoriteColor}`)
//My favorite color is 3 ← we must initialize each value

//after initializing:
//My favorite color is amarillo

//any ← para variables que puedan ser de cualquier tipo
let joker: any = 'Joker';
joker = 3000;

//object 
let object: object = { type: 'WildCard'};

// boolean. Valor verdadero o falso.
// number. Números.
// string. Cadenas de texto.
// string[]. Arreglo del tipo cadena de texto.
// Array. Arreglo multi-tipo, acepta cadenas de texto o números.
// enum. Es un tipo especial llamado enumeración.
// any. Cualquier tipo.
// object. Del tipo objeto.

//funciones

function sumar(a: number, b: number): number{ 
    return a + b;
}

function crearSumador(a: number): (number) => number{
    return function(b: number){
        return a + b;
    }
}

let addFour = crearSumador(4)
let totalSum = addFour(6);
console.log(totalSum); //10

function fullName (first: string, last: string = 'Doe'){
    return `${first} ${last}`;
}

console.log(fullName('Sergio'))
//Sergio Doe

//Interfaces → Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

enum Tones {
    Red = 'rojo',
    Green = 'verde',
}

interface Rectangle{
    ancho: number,
    alto: number,
    color?: Tones //← '?' makes the property optional
}

let rect: Rectangle = {
    ancho: 4,
    alto: 6,
    color: Tones.Green,
}

function area(r: Rectangle): number{ //detects the rectangle as an argument with its respective properties
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect); //24

rect.toString = function () {
    return this.color ? `Un rectangulo de ${this.alto} alto, ${this.ancho} ancho y de color ${this.color}` : `Un rectangulo de ${this.alto} alto, ${this.ancho}`
}

console.log(rect.toString())
// Un rectangulo de 6 alto, 4 ancho y de color verde