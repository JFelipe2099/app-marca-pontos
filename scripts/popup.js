const btn = document.querySelector('.log');
const popup = document.querySelectorAll('.popup-wrapper');
const x = document.querySelectorAll('.popup-close');

btn.addEventListener('click', () => {
    document.querySelector('.menu').style.width = '0';
    popup[0].style.display = 'block';
});

x.forEach(x => x.addEventListener('click', e => {
    e.target.parentElement.parentElement.style.display = 'none';
}));

const closePopup = (x=0) => {
    popup[x].style.display = 'none';
}

// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
// });