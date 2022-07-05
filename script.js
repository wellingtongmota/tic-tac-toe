const verificaPosicao = (valor) => {
    if (valor == 'X' || valor == 'O')
        return false

    return true
}

const verificaJogada = (player) => {
    let linha1 = mapa.slice(0, 3)
    let linha2 = mapa.slice(3, 6)
    let linha3 = mapa.slice(6)
    let coluna1 = [mapa[0], mapa[3], mapa[6]]
    let coluna2 = [mapa[1], mapa[4], mapa[7]]
    let coluna3 = [mapa[2], mapa[5], mapa[8]]
    let diagonal1 = [mapa[0], mapa[4], mapa[8]]
    let diagonal2 = [mapa[2], mapa[4], mapa[6]]

    l1 = linha1.every(function (x) { return x == player; })
    l2 = linha2.every(function (x) { return x == player; })
    l3 = linha3.every(function (x) { return x == player; })
    c1 = coluna1.every(function (x) { return x == player; })
    c2 = coluna2.every(function (x) { return x == player; })
    c3 = coluna3.every(function (x) { return x == player; })
    d1 = diagonal1.every(function (x) { return x == player; })
    d2 = diagonal2.every(function (x) { return x == player; })

    if (l1 == true ||
        l2 == true ||
        l3 == true ||
        c1 == true ||
        c2 == true ||
        c3 == true ||
        d1 == true ||
        d2 == true
    )
        fimJogo(player)
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
}

const fimJogo = (player) => {
    console.log('Fim de jogo ' + player + ' venceu!')
    mapa.length = 0

    for (let pos = 0; pos < boxs.length; pos++)
        boxs[pos].textContent = ''
}

const jogo = document.querySelector('.wrapper')
const boxs = document.querySelectorAll('.box')
var jogada = 0
var mapa = []

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