const verificaPosicao = (valor) => valor == 'X' || valor == 'O' ? false : true

const verificaJogada = (player) => {
    let vitoria = false

    combinacao = [
        [mapa[0], mapa[1], mapa[2]],
        [mapa[3], mapa[4], mapa[5]],
        [mapa[6], mapa[7], mapa[8]],
        [mapa[0], mapa[3], mapa[6]],
        [mapa[1], mapa[4], mapa[7]],
        [mapa[2], mapa[5], mapa[8]],
        [mapa[0], mapa[4], mapa[8]],
        [mapa[2], mapa[4], mapa[6]]
    ]

    for (let i = 0; i < combinacao.length; i++) {
        vitoria = combinacao[i].every(function (x) { return x == player; })
        if(vitoria)
            fimJogo(player)
    }
}

const criaMapa = () => {
    for (let pos = 0; pos < boxs.length; pos++)
        mapa.push(boxs[pos].textContent)
}

const atualizaMapa = (box, player) => {
    for (let pos = 0; pos < boxs.length; pos++) {
        if (boxs[pos].dataset.box == box) {
            mapa[pos] = player
            verificaJogada(player)
        }
    }
    return player
}

const fimJogo = (player) => {
    console.log('Fim de jogo ' + player + ' venceu!')
    mapa.length = 0
    jogada = 0

    for (let pos = 0; pos < boxs.length; pos++)
        boxs[pos].textContent = ''
}

const jogo = document.querySelector('.container')
const boxs = document.querySelectorAll('.box')
let jogada = 0
let mapa = []

jogo.addEventListener('click', e => {
    let div = e.target
    let box = div.dataset.box
    let valor = div.textContent

    if (mapa.length == 0)
        criaMapa()

    if (jogada % 2 == 0) {
        if (verificaPosicao(valor)) {
            div.textContent = 'X'
            atualizaMapa(box, 'X')
        }
    } else {
        if (verificaPosicao(valor)) {
            div.textContent = 'O'
            atualizaMapa(box, 'O')
        }
    }

    jogada++
})