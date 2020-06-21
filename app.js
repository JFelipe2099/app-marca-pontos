// engine do app
const mesa = document.querySelector('.mesa');

const addJogador = document.querySelector('.addJogador');
const nomeJogador = document.querySelector('.nomeJogador');
const novoJogador = document.querySelector('.novoJogador');

// cores
const color = ['#0569BE', '#C71C24', '#019C42', '#F3C600', '#ed79ed'];
let colorSelector = 0;

// adiciona um novo jogador a mesa
novoJogador.addEventListener('click', event => {
    if (event.target.className === 'addJogador'){

        const nome = nomeJogador.value;
        const newPlayer = document.createElement('div');
        newPlayer.innerHTML = `<div class="player" style="background-color: ${color[colorSelector]}">
            <p>${nome}</p>
            <button class="minus">&minus;</button>
            <button class="score">0</button>
            </div>`;

        colorSelector++;
        if (colorSelector === 5){
            colorSelector = 0;
        }

        mesa.append(newPlayer);
        nomeJogador.value = '';

        // adiciona um event listener ao novo jogador criado
        newPlayer.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON'){
                if (event.target.className === 'score'){
                newPlayer.querySelector('.score').innerText = Number(newPlayer.querySelector('.score').innerText) + 1;
            } else{
                newPlayer.querySelector('.score').innerText = Number(newPlayer.querySelector('.score').innerText) - 1;
            }
        }
        });
    }
});