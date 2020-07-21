const logForm = document.querySelector('form');
const popupContent = document.querySelector('.popup-content');
const displayLog = document.querySelector('.display');
let logData = [];

logForm.addEventListener('submit', e => {
    e.preventDefault();

    const players = document.querySelectorAll('.player');
    players.forEach(pl => {
        logData.push({nome: pl.children[0].value, pontos: pl.children[2].textContent});
    });

    localStorage.setItem(logForm.logName.value, JSON.stringify(logData));
    logData = [];
    logForm.reset();

    popupContent.innerHTML = `
        <h2>Log realizado com sucesso!</h2>

        <button class="popup-button" onclick="closePopup()">Fechar</button>
    `;
});

displayLog.addEventListener('click', () => {
    open('log.html', '_self');
});