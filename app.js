function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    //VARIAVEL CONTAINER BUSCADA PELO ID 'container'
    let cartao = document.createElement('article')
    //VARIAVEL CARTAO QUE CRIA <ARTICLE> NO HTML
    cartao.className = 'cartao'
    //CRIA CLASSE "cartao" para o elemento criado
    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `//inner.HTML insere texto no HTML via JAVASCRIPT
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    //criação da função viraCartao
    //ao virar o cartão a resposta invisivel ficará invisivel por causa do !
    //ao clicar no cartao ele adiciona o método active p/ ativar o clic na resposta
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)
    //adiciona um evento de escuta para o clic do cartao
    //ao clicar cirar um item "filho(appendChild)" no cartao
}