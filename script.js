let phong = localStorage.getItem('Phong');
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
document.addEventListener("DOMContentLoaded", getM);
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById(localStorage.getItem('cais')).classList.add('cais');
    document.querySelector('.add').children[2].innerText = localStorage.getItem('num');
});

function addCais(event){
    let i;
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
        localStorage.setItem('num', playerInput.value);
        document.querySelector('.add').children[2].innerText = playerInput.value;
        playerInput.value = '';
    }
});


const toDoList = document.querySelector('.players');
toDoList.addEventListener('click', vnd);
function vnd(event){
    const item = event.target;
    var numM = Number(localStorage.getItem('num'));
    var playerM = localStorage.getItem(item.parentElement.children[0].innerText);
    cais = localStorage.getItem('cais');
    var caisM = localStorage.getItem(cais);
    if(item.parentElement.children[0].innerText === cais){
        return;
    }

    if(item.innerText === '-'){  
        playerM = Number(playerM) - numM;
        localStorage.setItem(item.parentElement.children[0].innerText, playerM);

        caisM = Number(caisM) + numM;
        localStorage.setItem(cais, caisM);
    }

    if(item.innerText === '+'){  
        playerM = Number(playerM) + numM;
        localStorage.setItem(item.parentElement.children[0].innerText, playerM);

        caisM = Number(caisM) - numM;
        localStorage.setItem(cais, caisM);
    }

    getM();

}

function getM(){
    let i;
    var players = document.querySelectorAll('.players div');
    for (i = 0; i < players.length; i++){
        var playerM = localStorage.getItem(players[i].children[0].innerText);
        players[i].children[2].innerText = playerM;
    }
}