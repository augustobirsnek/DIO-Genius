let order = [];
let clickedOrder = [];
let score = -1;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 100);
    order[order.length] = colorOrder%4;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        setTimeout(() => {
            ligthColor(elementColor);
        }, 1000);
    }
}

//acende a proxima cor
let ligthColor = (element) => {
    setTimeout(() => {
        element.classList.toggle('selected');
        console.log(element);
        setTimeout(() => {
            element.classList.toggle('selected');
        }, 350);
    },700);
}

//checa se os botoes clicados são os mesmos gerados no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Potuação: ${score+1}\nVocê acertou! Iniciando próximo nivel!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.toggle('selected');

    setTimeout(() => {
        createColorElement(color).classList.toggle('selected');
        checkOrder();
    });
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color%4 == 0) {
        return green;
    } 
    else if(color%4 == 1) {
        return red;
    } 
    else if(color%4 == 2) {
        return yellow;
    } 
    else if(color%4 == 3) {
        return blue;
    } 
}

//funcao para proximo nivel de jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}


//funcao de inicio de jogo
let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
    score = -1;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();