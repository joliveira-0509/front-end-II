const p = document.querySelector('#paragrafo');
p.onclick = () => {
    alert('Paragráfo clicado!')
}

const divImg = document.querySelector('#divImg');
/* divImg.addEventListener('click', () => {
    divImg.style.border = '2px solid black'
}) */

function pMouse() {
    divImg.style.border = '2px solid black'
}
function sMouse() {
    divImg.style.border = 'none'
}

divImg.addEventListener('mouseover',
    pMouse
);
divImg.addEventListener('mouseout',
    sMouse
);

const clique = () => {
    console.log('Botão clicado!');
    alert('Botão clicado!');
}

function pressTecla() {
    if (window.getComputedStyle(divImg.null).getPropertyValue('background-color') === 'rgb(0, 0, 0)') {
        divImg.style.backgroundColor = 'rgb(225, 225, 225)'
    } else {
        divImg.style.backgroundColor = 'rgb(0, 0, 0)'
    }
}