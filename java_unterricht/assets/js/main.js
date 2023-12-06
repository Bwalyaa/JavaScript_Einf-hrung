console.log("Hello World!");

// variable 

// const - wird für werte verwendet die nicht verändert werden sollen
// let - werte können noch mal verändert werden
// var - seit ECMSCRIPT 6 wird var nicht mehr verwendet

// ? CONST

const trainerName = "Farid"
console.log(trainerName);

// ? LET
let score = 8
console.log(score);

let num1 = 5
console.log("das ist num1: ", num1);

let num2 = 55;
console.log("das ist num2:", num2);

let num3 = 44
console.log({num3});

// const num4 = 300; const lässt sich nicht überschreiben


// kein let, da wir die variable schon in zeile 20 vor definiert haben
num1 = 105
console.log({num1});

num1 = 230
console.log(num1);


const addScore = num1 + num2
console.log({addScore});

console.log("TEST",num1 + num2);

// DatenType


// ? Number - String - Boolean

// ? String sind Textwerte
// um ein String auszugeben, müssen wir "" oder ''

console.log("Das ist ein String");
console.log('Das ist auch ein String');
// wird in der Konsole als weißer Text ausgegeben

// ? Number
// numerische Werte werden lila ausgegeben
console.log('NUMBERS');
console.log(10);
console.log(10 + 4);

console.log("10" + "4"); //führt eine Zeichenketten-konkatenation durch
console.log("4" * 4);
console.log("vier" * 4); //kommt NAN raus = not a number
console.log("4" + "4");
console.log("10" - "4");

// ? Boolean
//Booleans werden ebenfalls lila ausgegeben und sie haben nur zwei mögliche Werte: true or false
console.log(true);
console.log(false);


// Konvertionen

// * selbsterklärende Namen verwenden
// * nicht zu kurz
// let meineFunktion = "funktion"

// * nicht zu lang
// let lassUnsGemeinsamJavaScriptLernenDenn = "NEIN NICHT SO!"

//* dürfen nicht mit Zahlen anfangen
//let 2Pac = "Nein, nein!"
//statdessen let twoPac = "so ist es besser!"

// * camelCase
let meineErsteVariable;
// Englisch ist besser
let myFirstVariable;

// Underscoure
let my_first_variable;

//was nicht geht
// # let nein-nein-so-nicht
//# let $bitteSoAuchNicht;
//let kanischsonichtlesen 

// Case Sensitive
//das sind zwei unterschiedliche Werte
let a = 10;
let A = 100;
console.log({a});
console.log({A});

//String Concatination
console.log("String Concatination");

const firstName = "Wade";
const secondName = "Winston";
const lastName = "wilson";

let state = "New York"
// let leerzeichen = " "

console.log("Ich bin" + firstName + " " + secondName + " " + lastName + " " + "und ich lebe in" + state);
console.log(`ich bin ${firstName} ${secondName} ${lastName} und ich lebe in ${state}`);

//Arithmetische Operatoren
console.log("Arithmetische Operatoren");

let x = 5;
let y = 3;
let z = 15;

//addieren
console.log(x + y);
//subtrahieren
console.log(x - y);
//dividieren
console.log(x / y);
//multiplizieren
console.log(y * z);

// Modulo % = Restwert

console.log(15 % 5); // 0
console.log(5 % 2); // 1
console.log(15 % 4); // 3

// - Increment
// mit ++ wird der Wert um +1 erhöht

let zahl1 = 2
console.log({zahl1});
zahl1++;
zahl1++;

console.log((zahl1));

// - Decrement
// mit -- wird der Wert -1 gerechnet

let zahl2 = 5;
zahl2--;
zahl2--;
console.log({zahl2});

// Output
console.log(Output);

// - document.write()
//mit der write() Methode können wir Elemente in unserem HTML ausgeben

//so wird ein Text ausgegeben
document.write("Hallo Welt");

//und so mit einem HTML-Tag
document.write("<h2>Ich bin eine Headline</h2>");

// - Window.alert()
// window.alert(" WARNUNG !!!!")

//Input 
// window.prompt()
//es öffnet sich ein popup, in dem der User etwas eingeben kann
window.prompt("wie heisst du ?")
sayYourName = window.prompt("wie heisst du ?")

let confirm = window.confirm("Stimmen Sie den Cookies zu?")
window.confirm("Stimmen Sie den Cookies zu?");
console.log(confirm);
