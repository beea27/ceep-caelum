'use strict';

var btn = document.querySelector('#btnMudaLayout');

function mudaTexto() {
    if (btn.textContent == 'Linhas') {
        btn.textContent = 'Blocos';
    } else {
        btn.textContent = 'Linhas';
    }
}

btn.addEventListener('click', mudaTexto);

var mural = document.querySelector('.mural');

function mudaLayout() {
    mural.classList.toggle('mural--linha');
}

btn.addEventListener('click', mudaLayout);

btn.classList.remove('no-js');