var index = 1;
var index2;
var index3;
showImage(index);

function showImage(ind) {
    // index= ind;
    var slides = document.getElementsByClassName('slides');
    if (ind > slides.length-1) {
        index = 1;
    }
    if (ind < 1) {
        index = slides.length;
    }
    index2 = index+1;


if (index2 > slides.length) {
        index2 = 1;
    }
    if (index2 < 1) {
        index2 = slides.length;
    }
index3 = index2+1;

if (index3> slides.length-1) {
        index3 = 1;
    }
    if (index3 < 1) {
        index3 = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    

   slides[index-1].style.display = 'block';
    slides[index2 - 1].style.display = 'block';
    slides[index3 - 1].style.display = 'block';
    slides[index - 1].style.left = '0%'
    slides[index2 - 1].style.left = '33.4%'
    slides[index3 - 1].style.left = '66.7%'
}


function incrementIndex() {
    index++;
    showImage(index);
}

function decrementIndex() {
    index--;
    showImage(index);
}
// setInterval(incrementIndex, 1000);

function next(){
   
incrementIndex();

}


function back(){
 
decrementIndex();

}