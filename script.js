const verificaPosicao = (posicao) => {
    if (posicao == 'X' || posicao == 'O')
        return false
    
    return true
}

const criaMapa = () => {
    for (var pos = 0; pos < boxs.length; pos++){
        mapa.push(boxs[pos].textContent)
    }
}

const atualizaMapa = (action, player) => {
    for (var pos = 0; pos < boxs.length; pos++){
        if(boxs[pos].dataset.action == action)
            mapa[pos] = player
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
        criaMapa()

    console.log(mapa)

    if (jogada % 2 == 0) {
        if(verificaPosicao(posicao)){
            div.textContent = 'X'
            atualizaMapa(action, 'X')
        }
    } else {
        if(verificaPosicao(posicao)) {
            div.textContent = 'O'
            atualizaMapa(action, 'O')
        }
    }

    jogada++

    // console.log(action)
})