const verificaPosicao = (posicao) => {
    if (posicao == 'X' || posicao == 'O')
        return false
    
    return true
}

const preencheMapa = () => {
    for (var pos = 0; pos < boxs.length; pos++){
        mapa.push(boxs[pos].textContent)
    }
}

const jogo = document.querySelector('.wrapper')
var boxs = document.querySelectorAll('[data-action]')
var jogada = 0
var mapa = []

jogo.addEventListener('click', e => {
    const div = e.target
    const action = div.dataset.action
    const posicao = div.textContent

    if (mapa.length == 0)
        preencheMapa()

    console.log(mapa)

    if (jogada % 2 == 0) {
        if(verificaPosicao(posicao))
            div.textContent = 'X'
    } else {
        if(verificaPosicao(posicao))
            div.textContent = 'O' 
    }

    jogada++

    // console.log(action)
})