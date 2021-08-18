console.log('Funciona correctamente');

//FORMAS DE SELECCIONAR ELEMENTOS

//------------------------------------------------------------//
//querySelector -> me retorna ya sea ninguno o un elemento que concuerde con el selector que estoy escribiendo

// const heading = document.querySelector('#heading');
// const heading = document.querySelector('.header__texto h2');
const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos

heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');

console.log(heading);
//------------------------------------------------------------//

//------------------------------------------------------------//
//querySelectorAll -> me retorna ya sea ninguno o todos los elementos que concuerde con el selector que estoy escribiendo
const enlaces = document.querySelectorAll('.navegacion a');

console.log(enlaces);
console.log(enlaces[0]); //->Funciona como un array

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
//------------------------------------------------------------//

//------------------------------------------------------------//
//getElementById
const heading2 = document.getElementById('heading');
//------------------------------------------------------------//

//------------------------------------------------------------//
//createElement
//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//EJEMPLO DE UN ENLACE<a href='url.html' class='nuevo-enlace'>URL</a>;

//AGREGO EL HREF
nuevoEnlace.href = 'nuevo-enlace.html';
//AGREGO EL TEXTO
nuevoEnlace.textContent = 'Un nuevo enlace';
//AGREGO LA CLASE
nuevoEnlace.classList.add('navegacion__enlace');
//LO AGREGO AL HTML DONDE YO QUIERO
const navegacion = document.querySelector('.navegacion'); //SELECCIONO SOLO EL PRIMER ENLACE
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//------------------------------------------------------------//

//------------------------------------------------------------//
//Eventos
console.log(1);

window.addEventListener('load', function () {
  //Load espera a que el JS y los archivos que dependen del HTML esten listos
  console.log(2);
});

//Otra forma de hacer lo mismo

window.onload = function () {
  console.log(3);
};

document.addEventListener('DOMContentLoaded', function () {
  //DOMContentLoaded espera a que cargue el HTML, pero no espera CSS o imagenes
  console.log(4);
});

console.log(5);

window.addEventListener('load', imprimir);

function imprimir() {
  console.log(6);
}

window.onscroll = function () {
  console.log('scrolling...');
};
//------------------------------------------------------------//
