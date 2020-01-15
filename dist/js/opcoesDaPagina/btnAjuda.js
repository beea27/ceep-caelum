'use strict';

// (function(){
//     const btnAjuda = document.querySelector('#btnAjuda');
//     btnAjuda.addEventListener('click', function(){
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');
//         xhr.responseType = "json";
//         xhr.send();
//         xhr.addEventListener("load", function(){
//             const objeto = xhr.response;
//             const ajudas = objeto.instrucoes;

//             ajudas.forEach(function(ajuda){
//                 adicionarCartaoNoMural(ajuda);
//             });
//         });

//     });

//     btnAjuda.classList.remove('no-js');
// })();


(function () {
    var btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function () {
        fetch('http://ceep.herokuapp.com/cartoes/instrucoes').then(function (response) {
            if (!response.ok) {
                throw new Error(response.Error.message);
            }
            return response.json();
        }).then(function (objeto) {
            var ajudas = objeto.instrucoes;

            ajudas.forEach(function (ajuda) {
                adicionarCartaoNoMural(ajuda);
            });
        }).catch(function (Error) {});
    });

    btnAjuda.classList.remove('no-js');
})();