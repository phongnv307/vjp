let phong = localStorage.getItem('phong');
if(phong === null){
    localStorage.setItem('dAnh','0');
    localStorage.setItem('Bao','0');
    localStorage.setItem('Huy','0');
    localStorage.setItem('Hoang','0');
    localStorage.setItem('Nam','0');
    localStorage.setItem('Phong','0');
    localStorage.setItem('Quang','0');
    localStorage.setItem('Thinh','0');
    localStorage.setItem('Vu','0');
    localStorage.setItem('Quynh','0');
}

let cais = localStorage.getItem('cais');
if(cais === null){
    localStorage.setItem('cais','Bao');
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById(localStorage.getItem('cais')).classList.add('cais');
});

function addCais(event){
    let i;
    console.log(event);
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++){
        players[i].className = players[i].className.replace("cais", "");
    }
    event.parentElement.className += "cais";
    localStorage.setItem('cais',event.innerText);
}

let num = localStorage.getItem('num');
if(num === null){
    localStorage.setItem('num','5');
}

const playerBtn = document.querySelector('.player-btn');
const playerInput = document.querySelector('.player-input');
playerBtn.addEventListener('click', function(){
    if(playerInput.value != '' ){
        localStorage.setItem('num',playerInput.value);
    }
});

