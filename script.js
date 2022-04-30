const gallowsImg = new Array();

gallowsImg[0] = new Image();
gallowsImg[0].src ='.assets/images/Start.jpeg';


function nextImage() {
    var img = document.getElementById('gallows');
    for(var i=0; i<gallowsImg.length; I++) {
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

