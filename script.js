document.addEventListener("DOMContentLoaded", function(){

    let playerName;
        if(localStorage.getItem('playerName') === null) {
            playerName = [];
        }
        else {
            playerName = JSON.parse(localStorage.getItem('playerName'));
            playerName.forEach(function(name){
                const newPlayer = document.createElement("div");
                newPlayer.id = name;
                const newName = document.createElement('span');
                newName.classList.add('name');
                newName.setAttribute('onclick','addCais(this)');
                newName.innerHTML = name;
                const minus = document.createElement('button');
                minus.innerHTML = "-";
                const money = document.createElement('span');
                money.classList.add('money');
                const plus = document.createElement('button');
                plus.innerHTML = "+";
                
                newPlayer.appendChild(newName);
                newPlayer.appendChild(minus);
                newPlayer.appendChild(money);
                newPlayer.appendChild(plus);
                playerList.appendChild(newPlayer);
            });
            document.getElementById(localStorage.getItem('cais')).classList.add('cais');
        }
        
        document.querySelector('.add').children[2].innerText = localStorage.getItem('num');

});
document.addEventListener("DOMContentLoaded", getM);

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

const numBtn = document.querySelector('.num-btn');
const numInput = document.querySelector('.num-input');
numBtn.addEventListener('click', function(){
    if(numInput.value != '' ){
        localStorage.setItem('num', numInput.value);
        document.querySelector('.add').children[2].innerText = numInput.value;
        numInput.value = '';
    }
});


const playerList = document.querySelector('.players');
playerList.addEventListener('click', vnd);
function vnd(event){
    const item = event.target;
    var numM = Number(localStorage.getItem('num'));
    var playerM = localStorage.getItem(item.parentElement.children[0].innerText);
    let cais = localStorage.getItem('cais');
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

const playerBtn = document.querySelector('.player-btn');
const playerInput = document.querySelector('.player-input');
playerBtn.addEventListener('click', function(){
    
    if(playerInput.value != '' ){
        const newPlayer = document.createElement("div");
        newPlayer.id = playerInput.value;
        const newName = document.createElement('span');
        newName.classList.add('name');
        newName.setAttribute('onclick','addCais(this)');
        newName.innerHTML = playerInput.value;
        const minus = document.createElement('button');
        minus.innerHTML = "-";
        const money = document.createElement('span');
        money.classList.add('money');
        const plus = document.createElement('button');
        plus.innerHTML = "+";
        
        newPlayer.appendChild(newName);
        newPlayer.appendChild(minus);
        newPlayer.appendChild(money);
        newPlayer.appendChild(plus);
        playerList.appendChild(newPlayer);

        localStorage.setItem(playerInput.value,'0');
        let cais = localStorage.getItem('cais');
        if(cais === null){
            localStorage.setItem('cais',playerInput.value);
            newPlayer.classList.add('cais');
        }

        let playerName;
        if(localStorage.getItem('playerName') === null) {
            playerName = [];
        }
        else {
            playerName = JSON.parse(localStorage.getItem('playerName'));
        }

        playerName.push(playerInput.value);
        localStorage.setItem('playerName', JSON.stringify(playerName));
        playerInput.value = '';
        getM();
        
    }
});