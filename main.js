
console.log("hello!");

var x = 5;
var name = "Peter";
let y = 7;

console.log(name);

if (x > 3) {
  console.log(x);
}

for (let i=0; i < 10; i++) {
  console.log(i);
}

// in Java: int[] o List<Integer>
let numbers = [3, 7, 2, 1];
let animals = ["cat", "dog"];
// bad practice: let mix = ["cat", 7, true, "dog"];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let sum = suma(3,7);
console.log(sum);

greet("Javi");


// obtiene un elemento html con el selector CSS indicado
let escudo = document.querySelector(".header img");
// cambios en el estilo CSS:
// escudo.style.display = "none"; // esto esconde el elemento
escudo.style.border = "5px solid red";

// Esto hace que cuando se haga click en el escudo, se llame a la funcion escudoClickado
//escudo.onclick = escudoClickado;

escudo.onmouseover = escudoRatonOn;
escudo.onmouseout = escudoRatonOut;

let lala = document.querySelectorAll(".block div");

for (i = 0; i < lala.length; i++) {
    lala[i].onclick = lalaClickado;
}

let jugadores = document.querySelectorAll(".jugadores div");

let links = document.querySelectorAll(".jugadores a");

let paco = document.querySelector(".paco");

let andre = document.querySelector(".andre");

let caca = document.querySelector(".caca");

for (i = 0; i < jugadores.length; i++) {
    jugadores[i].onmouseover = jugadoresRatonOn;
    jugadores[i].onmouseout = jugadoresRatonOut;
}

for (i = 0; i < links.length; i++) {
    links[i].onmouseover = linksRatonOn;
    links[i].onmouseout = linksRatonOut;
}

paco.onmouseover = pacoRatonOn;
paco.onmouseout = pacoRatonOut;

andre.onmouseover = andreRatonOn;
andre.onmouseout = andreRatonOut;

andre.onclick = andreClickado;
caca.onclick = cacaClickada;


// funciones

 /*function escudoClickado() {
  console.log("El escudo ha sido clicado"); // abrir consola para ver estos mensajes
  escudo.style.border = "5px solid blue"; // cambiamos el borde del escudo
  // Dentro de la función podemos usar event.target para referirnos al elemento clicado
  // (en este caso es el mismo escudo, así que es igual poner 'escudo' o 'event.target')
  event.target.style.padding = "10px"; // añadimos un padding
  escudo.style.height = "250px";
  escudo.style.width = "300px";
}*/

function escudoRatonOn() {
    console.log("raton encima del escudo");
    escudo.style.border = "10px solid blue";
    escudo.style.height = "250px";
    escudo.style.width = "300px";
}

function escudoRatonOut() {
    console.log("raton fuera del escudo");
    escudo.style.border = "5px solid red";
    escudo.style.height = "150px";
    escudo.style.width = "200px";
}

function lalaClickado() {
    event.target.style.color = "red";
}

function jugadoresRatonOn() {
    event.target.style.color = "gold";
}

function jugadoresRatonOut() {
    event.target.style.color = "black";
}

function linksRatonOn() {
    event.target.style.color = "red";
}

function linksRatonOut() {
    event.target.style.color = "blue";
}

function pacoRatonOn() {
    $(paco).text("ALCANCER TUERCEBOTAS");
    paco.style.color = "gold";
    paco.style.fontSize = "20px";
}

function pacoRatonOut() {
    $(paco).text("17- Paco Alcacer");
    paco.style.color = "black";
    paco.style.fontSize = "16px";
}

function andreRatonOn() {
    $(andre).text("Clicka para verme !!!!");
    andre.style.color = "gold";
    andre.style.fontSize = "20px";
    //andre.style.display = "none";
    //caca.style.display = "block";

}

function andreRatonOut() {
    $(andre).text("21- André Gomes");
    andre.style.color = "black";
    andre.style.fontSize = "16px";
    //caca.style.display = "none";
    //andre.style.display = "initial";
}

function andreClickado() {
    caca.style.display = "block";
    andre.style.display = "none";
}

function cacaClickada() {
    caca.style.display = "none";
    andre.style.display = "initial";
}

function greet(name) {
  console.log("Hello " + name);
}

function suma(x, y) {
  return x + y;
}
