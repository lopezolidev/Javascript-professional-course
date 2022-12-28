// console.log('Hello world')
function add(a, b) {
    return a + b;
}
var suma = add(1, 4);
//basic types
//Boolean
var boolean = true;
boolean: boolean = false;
//Numbers
var age = 6;
var numerator = 42;
var denominator = age;
var result = numerator / denominator;
//Strings
var nombre = 'Sergio';
var saludo = "Hi, my name is ".concat(nombre);
//Arrays
//de 1 solo tipo
var people = [];
people.push("Laura", "Nicole", "Gustavo");
// people.push(9000);
//de mas de un tipo
var peopleAndNumbers = [];
peopleAndNumbers.push(9000, "kerry", 756464, "Jay");
//Enums, algo como objetos estáticos que no van a cambiar
var Colors;
(function (Colors) {
    Colors["Red"] = "rojo";
    Colors["Green"] = "verde";
    Colors["Blue"] = "azul";
    Colors["Yellow"] = "amarillo";
    Colors["Orange"] = "naranja";
    Colors["Purple"] = "purpura";
})(Colors || (Colors = {}));
//llamando a un elemento del enum
var favoriteColor = Colors.Yellow;
console.log("My favorite color is ".concat(favoriteColor));
//My favorite color is 3 ← we must initialize each value
//after initializing:
//My favorite color is amarillo
//any ← para variables que puedan ser de cualquier tipo
var joker = 'Joker';
joker = 3000;
//object 
var object = { type: 'WildCard' };
// boolean. Valor verdadero o falso.
// number. Números.
// string. Cadenas de texto.
// string[]. Arreglo del tipo cadena de texto.
// Array. Arreglo multi-tipo, acepta cadenas de texto o números.
// enum. Es un tipo especial llamado enumeración.
// any. Cualquier tipo.
// object. Del tipo objeto.
//funciones
function sumar(a, b) {
    return a + b;
}
function crearSumador(a) {
    return function (b) {
        return a + b;
    };
}
var addFour = crearSumador(4);
var totalSum = addFour(6);
console.log(totalSum); //10
function fullName(first, last) {
    if (last === void 0) { last = 'Doe'; }
    return "".concat(first, " ").concat(last);
}
console.log(fullName('Sergio'));
//Sergio Doe
//Interfaces → Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.
var Tones;
(function (Tones) {
    Tones["Red"] = "rojo";
    Tones["Green"] = "verde";
})(Tones || (Tones = {}));
var rect = {
    ancho: 4,
    alto: 6,
    color: Tones.Green
};
function area(r) {
    return r.alto * r.ancho;
}
var areaRect = area(rect);
console.log(areaRect); //24
rect.toString = function () {
    return this.color ? "Un rectangulo de ".concat(this.alto, " alto, ").concat(this.ancho, " ancho y de color ").concat(this.color) : "Un rectangulo de ".concat(this.alto, " alto, ").concat(this.ancho);
};
console.log(rect.toString());
// Un rectangulo de 6 alto, 4 ancho
