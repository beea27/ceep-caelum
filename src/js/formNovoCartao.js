(function(){
    const form = document.querySelector('.formNovoCartao');
    let numeroDoCartao = 0;

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const textArea = form.querySelector('.formNovoCartao-conteudo');
        const isTextAreaVazio = textArea.value.trim().length === 0;
        if(isTextAreaVazio){
            const msgErro = document.createElement('div');
            msgErro.classList.add('formNovoCartao-msg');
            msgErro.textContent = 'Formulario inválido. Não digite vários nada!';

            const btnSubmit = form.children[form.children.length -1];
            msgErro.addEventListener('animationend', function(event){
                msgErro.remove();
            });

            form.insertBefore(msgErro, btnSubmit);
        }
        else{
            adicionarCartaoNoMural({conteudo : textArea.value});
        }
        textArea.value = " ";
    });

    form.classList.remove('no-js');
})();