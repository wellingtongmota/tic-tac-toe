const verificaPosicao = (player, jogada, posicao) => {
    if (posicao == 'X' || posicao == 'O') {
        console.log('já tem um valor')
         return jogada--
    } else {
        return jogada++
    }
}

const jogo = document.querySelector('.wrapper')
var jogada = 0

jogo.addEventListener('click', e => {
    const div = e.target
    const posicao = div.dataset.action
    const valor = div.textContent

    if (valor == 'X' || valor == 'O')
        console.log('já tem um valor')
    else {
        if (jogada % 2 == 0) {
            jogada = verificaPosicao('X', jogada, posicao)
        } else {
            jogada = verificaPosicao('O', jogada, posicao)
        }
    }
    console.log(action)
})