const verificaPosicao = (posicao) => {
    if (posicao == 'X' || posicao == 'O') {
        console.log('já tem um valor')
        return false
    }
    return true
}

const jogo = document.querySelector('.wrapper')
var jogada = 0

jogo.addEventListener('click', e => {
    const div = e.target
    const action = div.dataset.action
    const posicao = div.textContent

    if (jogada % 2 == 0) {
        if(verificaPosicao(posicao)) {
            div.textContent = 'X'
            console.log('valor X aplicado')
        } else {
            console.log('já existe o valor X valor')
        }
    } else {
        if(verificaPosicao(posicao)) {
            div.textContent = 'O'
            console.log('valor O aplicado')
        } else {
            console.log('já existe o valor O valor')
        }
    }
    jogada++

    // console.log(action)
})