const mat2a = document.querySelector('.mat2a');
const mat2b = document.querySelector('.mat2b');
const mat2c = document.querySelector('.mat2c');
const mat2d = document.querySelector('.mat2d');

const determinante2 = document.querySelector('.determinante2');
const traspuesta2 = document.querySelector('.traspuesta2');
const inversa2 = document.querySelector('.inversa2');
const adjunta2 = document.querySelector('.adjunta2');
const result2 = document.querySelector('.result2');
const result__title = document.querySelector('result__title');

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
let result3 = document.querySelector('.result3');


function obtener_traspuesta() {
    /* result__title.textContent = 'Traspuesta de la matriz'; */
    a.textContent = mat2a.value;
    b.textContent = mat2c.value;
    c.textContent = mat2b.value;
    d.textContent = mat2d.value;
};

function matriz_determinante() {
     let determinante = mat2a.value * mat2d.value - mat2b.value * mat2c.value;
     a.textContent = determinante;
     b.textContent = '';
     c.textContent = '';
     d.textContent = '';
}

function matriz_adjunta() {
    a.textContent = mat2d.value;
    b.textContent = -mat2b.value;
    c.textContent = -mat2c.value;
    d.textContent = mat2a.value;
}

/* function matriz_inversa() {
    let a = mat2d.value;
    let b = -mat2b.value;
    let c = -mat2c.value;
    let d = mat2a.value;
    a.textContent = a ;
    c.textContent = b;
    b.textContent = c;
    d.textContent = d;
}
 */
determinante2.addEventListener('click', matriz_determinante);
adjunta2.addEventListener('click', matriz_adjunta);

/* inversa2.addEventListener('click', matriz_inversa); */

traspuesta2.addEventListener('click' , obtener_traspuesta);


