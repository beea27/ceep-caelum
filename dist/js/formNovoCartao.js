'use strict';

(function () {
    var form = document.querySelector('.formNovoCartao');
    var numeroDoCartao = 0;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var textArea = form.querySelector('.formNovoCartao-conteudo');
        var isTextAreaVazio = textArea.value.trim().length === 0;
        if (isTextAreaVazio) {
            var msgErro = document.createElement('div');
            msgErro.classList.add('formNovoCartao-msg');
            msgErro.textContent = 'Formulario inválido. Não digite vários nada!';

            var btnSubmit = form.children[form.children.length - 1];
            msgErro.addEventListener('animationend', function (event) {
                msgErro.remove();
            });

            form.insertBefore(msgErro, btnSubmit);
        } else {
            adicionarCartaoNoMural({ conteudo: textArea.value });
        }
        textArea.value = " ";
    });

    form.classList.remove('no-js');
})();