const btn = document.querySelector('.log');
const popup = document.querySelectorAll('.popup-wrapper');
const x = document.querySelector('.popup-close');

btn.addEventListener('click', () => {
    popup[0].style.display = 'block';
});

x.addEventListener('click', () => {
    popup[0].style.display = 'none';
});

const closePopup = (x=0) => {
    popup[x].style.display = 'none';
}

// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
// });