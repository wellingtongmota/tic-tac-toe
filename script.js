const jogo = document.querySelector('.wrapper')
var jogada = 0

jogo.addEventListener('click', e => {
    const div = e.target
    const action = div.dataset.action
    const valor = div.textContent

    if (valor == 'X' || valor == 'O')
        console.log('já tem um valor')
    else {
        if(jogada % 2 == 0) {
            div.textContent = 'X'
            jogada++
        } else {
            div.textContent = 'O'
            jogada++
        }
    }
    console.log(action)
})