// DOM: document object model

// function exibeNumeros() {
//     document.write(1 + 2);
//     document.write(1 + 3);
//     document.write(1 + 4);
// }

document.write("<h2>Olá Gabriel Ramos, do arquivo externo</h2>");

console.log("Minha mensagem pelo console")

var titulo = document.querySelector('.titulo');

// var titulos = document.querySelectorAll('.titulo');

// console.log(titulos);
// titulo.textContent = 'Mais um valor novo';


// exibeNumeros()
var button = document.querySelector('button');

console.log(button);

button.onclick = function() {
    document.write(1 + 2);
    document.write(1 + 3);
    document.write(1 + 4);
};
