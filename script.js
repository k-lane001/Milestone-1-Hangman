
//Image Loop Function
function nextImage() {
    for(var i=0; i<imgArray.length; i++) {
        imgArray[i];
        } 
}

// function nextWord() {
//     for(var i=0; i<names.length; i++) {
//         newWord += names[i];
//         }
// };

//Gameplay functions

// Shuffle Names function
function playGame() {
    document.getElementById('message').textContent = 'New Game!';
    let newWord = names[0];
    let img = imgArray[0];
    let score = 0;
    let splitWord = newWord.split('');
//need to rework splitWord into 'blanks'... '_' * splitWord.length
    let hiddenWord = document.getElementById('hiddenWord');
    hiddenWord.textContent = splitWord.join(' ');//this is just putting the actual word in right now

    console.log(hiddenWord.textContent);//this is for texting purposes *** to be removed

    // if (input == )


    

//set blanks content equal to length of hiddenWord.textContent




}

function resetGame() {
    let score = 0;
    msg.textContent = 'New Game!';

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

//variables
// const msg = document.getElementById('message');
const score = document.getElementById('score');
//Event Listeners
document.getElementById('start').addEventListener('click', playGame);
document.getElementById('reset').addEventListener('click', resetGame);




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



