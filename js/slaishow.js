
var slideItem = document.querySelector('.slide-show').children;
var slideLength = slideItem.length;
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#prev');
var number = document.querySelector('#number');
var index = 0;

nextBtn.onclick = function() {
    ChangeImage('next');
}
prevBtn.onclick = function() {
    ChangeImage('prev');
}

function ChangeImage(chon) {
    if (chon == 'next') {
        index++;
        if (index == slideLength) {
            index = 0;
        }
       
    } else {
        index--;
        if (index < 0) {
            index = slideLength - 1;
        }
      
    }
    
    for (var i = 0; i < slideLength; i++) {
        slideItem[i].classList.remove('active');
    }
    slideItem[index].classList.add('active');
}