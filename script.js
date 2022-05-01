
//Image Loop Function
function nextImage() {
    for(var i=0; i<imgArray.length; i++) {
        imgArray[i];
        } 
}

//Gameplay functions
function playGame() {
    var randomItem = names[Math.floor(Math.random()*names.length)];
    var wordField = document.createElement('div');
    wordField.textContent = randomItem;
    document.getElementById('wordField').appendChild(wordField);
    console.log(wordField.textContent);
}

function resetGame() {
    let score = 0;
    console.log('try again');
    playGame();
}

//add image to html
document.body.onload = addElement;

function addElement() {
    const img = document.createElement('img');
    img.src = './assets/images/Start.jpeg';
    document.getElementById('gallows').appendChild(img);
}
//Variables
const start = document.getElementById('start');
const reset = document.getElementById('reset');

//button event listeners
start.addEventListener('click', playGame);
reset.addEventListener('click', resetGame);


// Image Array
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './assets/images/Start.jpeg';

imgArray[1] = new Image();
imgArray[1].src = './assets/images/gallows2.jpg';

imgArray[2] = new Image();
imgArray[2].src =  './assets/images/gallows3.jpg';

imgArray[3] = new Image();
imgArray[3].src = './assets/images/gallows4.jpg';

imgArray[4] = new Image();
imgArray[4].src = './assets/images/gallows5.jpg';

imgArray[5] = new Image();
imgArray[5].src = './assets/images/gallows6.jpg';

imgArray[6] = new Image();
imgArray[6].src = './assets/images/gallows7.jpg';

imgArray[7] = new Image();
imgArray[7].src = './assets/images/gallows8.jpg';

imgArray[8] = new Image();
imgArray[8].src = './assets/images/gallows9.jpg';

imgArray[9] = new Image();
imgArray[9].src = './assets/images/gallows10.jpg';

imgArray[10] = new Image();
imgArray[10].src = './assets/images/End.png';



//Names Array
const names = ['freddy', 'jason', 'michael', 'pinhead', 'pennywise', 'chucky', 'norman', 'hannibal', 'jack', 'ghostface', 'frankenstein', 'dracula', 'mummy', ];



