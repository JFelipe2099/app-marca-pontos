const logForm = document.querySelector('form');
const popupContent = document.querySelector('.popup-content');
const logButton = document.querySelector('.display');
const displayLog = document.querySelector('.log-content');
const logContainer = document.querySelector('.log-container');
let logData = [];

logForm.addEventListener('submit', e => {
    e.preventDefault();

    const players = document.querySelectorAll('.player');
    players.forEach(pl => {
        logData.push({nome: pl.children[0].value, pontos: pl.children[2].textContent});
    });
    logData[0].date = new Date();

    localStorage.setItem(logForm.logName.value, JSON.stringify(logData));
    logData = [];
    logForm.reset();

    popup[0].style.display = 'none';
    popup[1].style.display = 'block';
});

logButton.addEventListener('click', () => {
    displayLog.innerHTML = '';
    for (let i = 0; i < localStorage.length; i ++){
        let tempData = JSON.parse(localStorage.getItem(localStorage.key(i)));
        
        tempData.sort((a, b) => {
            if (a.pontos > b.pontos){
                return -1;
            } else if (a.pontos < b.pontos){
                return 1;
            } else{
                return 0;
            }
        });

        displayLog.innerHTML += `<h2>${localStorage.key(i)}</h2>`;
        tempData.forEach(pl => {
            displayLog.innerHTML += `
                <p>${pl.nome}: ${pl.pontos}</p>
            `;
        });

        displayLog.innerHTML += '<hr>';
    }

    displayLog.innerHTML += '<button class="popup-button" onclick="closePopup(2)">Fechar</button>';
    document.querySelector('.menu').style.width = '0';
    logContainer.style.display = 'block';
});
