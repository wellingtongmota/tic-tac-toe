const verificaPosicao = (posicao) => {
    if (posicao == 'X' || posicao == 'O')
        return false

    return true
}

const verificaJogada = (player) => {
    var linha1 = mapa.slice(0, 3)
    var linha2 = mapa.slice(3, 6)
    var linha3 = mapa.slice(6)
    var coluna1 = [mapa[0], mapa[3], mapa[6]]
    var coluna2 = [mapa[1], mapa[4], mapa[7]]
    var coluna3 = [mapa[2], mapa[5], mapa[8]]
    var diagonal1 = [mapa[0], mapa[4], mapa[8]]
    var diagonal2 = [mapa[2], mapa[4], mapa[6]]

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
    for (var pos = 0; pos < boxs.length; pos++) {
        mapa.push(boxs[pos].textContent)
    }
}

const atualizaMapa = (action, player) => {
    for (var pos = 0; pos < boxs.length; pos++) {
        if (boxs[pos].dataset.action == action)
            mapa[pos] = player
    }
}

const fimJogo = (player) => {
    console.log('Fim de jogo ' + player + ' venceu!')
    mapa.length = 0
    for (var pos = 0; pos < boxs.length; pos++) {
        boxs[pos].textContent = ''
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

    // console.log(mapa)

    if (jogada % 2 == 0) {
        if (verificaPosicao(posicao)) {
            div.textContent = 'X'
            atualizaMapa(action, 'X')
            verificaJogada('X')
        }
    } else {
        if (verificaPosicao(posicao)) {
            div.textContent = 'O'
            atualizaMapa(action, 'O')
            verificaJogada('O')
        }
    }

    jogada++
})