// engine do app
const mesa = document.querySelector('.mesa');

const addJogador = document.querySelector('.addJogador');
// const nomeJogador = document.querySelector('.nomeJogador');
const novoJogador = document.querySelector('.novoJogador');

// cores
const color = ['#0569BE', '#C71C24', '#019C42', '#c77400', '#bf50bf'];
let colorSelector = 2;

// jogadores que já começam na mesa
const defaulPlayers = document.querySelectorAll('.player');
defaulPlayers.forEach(dPl => dPl.addEventListener('click', event => {
    if (event.target.className === 'trash fa fa-trash-o'){
        dPl.remove();
        if (colorSelector > 0){
            colorSelector--;
        }
    }

    if (event.target.className === 'minus fa fa-minus'){
        dPl.querySelector('.score').innerText = Number(dPl.querySelector('.score').innerText) - 1;
    }

    if (event.target.tagName === 'BUTTON'){
        if (event.target.className === 'score'){
        dPl.querySelector('.score').innerText = Number(dPl.querySelector('.score').innerText) + 1;
    }
}
}));

// adiciona um novo jogador a mesa
novoJogador.addEventListener('click', event => {
    if (event.target.className === 'addJogador'){

        // const nome = nomeJogador.value;
        const newPlayer = document.createElement('div');
        newPlayer.innerHTML = `<div class="player" style="background-color: ${color[colorSelector]}">
            <input type="text" placeholder="nome do jogador">
            <div class="minus fa fa-minus"></div>
            <button class="score" style="background-color: ${color[colorSelector]};">0</button>
            <div class="trash fa fa-trash-o"></div>
            </div>`;

        colorSelector++;
        if (colorSelector === 5){
            colorSelector = 0;
        }

        mesa.append(newPlayer);
        // nomeJogador.value = '';

        // adiciona um event listener ao novo jogador criado
        newPlayer.addEventListener('click', event => {
            if (event.target.className === 'trash fa fa-trash-o'){
                newPlayer.remove();
                if (colorSelector > 0){
                    colorSelector--;
                }
            }

            if (event.target.className === 'minus fa fa-minus'){
                newPlayer.querySelector('.score').innerText = Number(newPlayer.querySelector('.score').innerText) - 1;
            }

            if (event.target.tagName === 'BUTTON'){
                if (event.target.className === 'score'){
                newPlayer.querySelector('.score').innerText = Number(newPlayer.querySelector('.score').innerText) + 1;
            }
        }
        });
    }
});

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    const scores = document.querySelectorAll('.score');

    scores.forEach(score => score.innerText = 0);
});