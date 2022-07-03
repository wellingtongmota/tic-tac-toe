const verificaPosicao = (player, jogada, posicao) => {
    if (player == posicao) {
        console.log('já tem um valor')
        return jogada--
    } else {
        return jogada++
    }
}

const jogo = documegitnt.querySelector('.wrapper')
var jogada = 0

jogo.addEventListener('click', e => {
    const div = e.target
    const action = div.dataset.action
    const posicao = div.textContent

    if (jogada % 2 == 0) jogada = verificaPosicao('X', jogada, posicao)
    else jogada = verificaPosicao('O', jogada, posicao)

    console.log(action)
})