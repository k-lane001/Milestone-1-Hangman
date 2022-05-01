//Image Array

const gallowsImg = new Array();

gallowsImg[0] = new Image();
gallowsImg[0].src ='.assets/images/Start.jpeg';

gallowsImg[1] = new Image();
gallowsImg[1].src ='.assets/images/gallows2.jpeg';

gallowsImg[2] = new Image();
gallowsImg[2].src ='.assets/images/gallows3.jpeg';

gallowsImg[3] = new Image();
gallowsImg[3].src ='.assets/images/gallows4.jpeg';

gallowsImg[4] = new Image();
gallowsImg[4].src ='.assets/images/gallows5.jpeg';

gallowsImg[5] = new Image();
gallowsImg[5].src ='.assets/images/gallows6.jpeg';

gallowsImg[6] = new Image();
gallowsImg[6].src ='.assets/images/gallows7.jpeg';

gallowsImg[7] = new Image();
gallowsImg[7].src ='.assets/images/gallows8.jpeg';

gallowsImg[8] = new Image();
gallowsImg[8].src ='.assets/images/gallows9.jpeg';

gallowsImg[9] = new Image();
gallowsImg[9].src ='.assets/images/gallows10.jpeg';

gallowsImg[10] = new Image();
gallowsImg[10].src ='.assets/images/End.jpeg';

//Names Array
const names = ['freddy', 'jason', 'michael', 'pinhead', 'pennywise', 'chucky', 'norman', 'hannibal', 'jack', 'ghostface', 'frankenstein', 'dracula', 'mummy', ];

//Image Loop Function
function nextImage() {
    var img = document.getElementById('gallows');
    for(var i=0; i<gallowsImg.length; i++) {
        if gallowsImg[i].src == img.src) {
            if(i === gallowsImg.length) {
                document.getElementById('gallows').src = gallowsImg[0].src;
                break;
            }
            document.getElementById('gallows').src = gallowsImg[+1].src;
            break;
        }
    }
}

