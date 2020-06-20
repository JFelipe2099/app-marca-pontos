// WORKS, BUT FOR ONLY ONE
// const felipe = document.querySelector('.felipe');
// const joao = document.querySelector('.joao');

// let score = 0;
// function add(pl){
//     score++;
//     pl.innerText = score;
// }

// function minus(){
//     score--;
//     felipe.innerText = score;
// }

// const players = document.querySelectorAll('.player');
const mesa = document.querySelector('.mesa');

const addJogador = document.querySelector('.addJogador');
const nomeJogador = document.querySelector('.nomeJogador');
const novoJogador = document.querySelector('.novoJogador');

// let score = 0;
// players.forEach(player => player.addEventListener('click', event => {
    
//     if (event.target.tagName === 'BUTTON'){
//         console.log(event.target);

//         if (event.target.className === 'score'){
//             // score++;
//             player.querySelector('.score').innerText = Number(player.querySelector('.score').innerText) + 1;
//         } else{
//             // score--;
//             player.querySelector('.score').innerText = Number(player.querySelector('.score').innerText) - 1;
//         }
//     }
// }));

let colorSelector = 0;
novoJogador.addEventListener('click', event => {
    if (event.target.className === 'addJogador'){

        const color = ['#0569BE', '#C71C24', '#019C42', '#F3C600', '#ed79ed'];

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
        // const newPlayer = `
        //     <div class="player" style="background-color: #019C42">
        //     <p>${nome}</p>
        //     <button class="minus">&minus;</button>
        //     <button class="score">0</button>
        //     </div>
        // `;

        mesa.append(newPlayer);
        nomeJogador.value = '';
        // mesa.innerHTML += newPlayer;

        newPlayer.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON'){
                if (event.target.className === 'score'){
                // score++;
                newPlayer.querySelector('.score').innerText = Number(newPlayer.querySelector('.score').innerText) + 1;
            } else{
                // score--;
                newPlayer.querySelector('.score').innerText = Number(newPlayer.querySelector('.score').innerText) - 1;
            }
        }
        });
    }
});