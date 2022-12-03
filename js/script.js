let bttn = document.querySelector('.hero__text-content');
let bg = document.querySelector('.hero');
let expItems = document.querySelectorAll('.experience__item');
let para = document.querySelector('.info-para');
let ellipse = document.querySelector('.ellipse');
let arrow = document.querySelector('.arrowDown');

ellipse.style.top = '0px';

expItems.forEach((expItem) => {
    expItem.onclick = function() {
        let expItemId = expItem.id;
        switch(expItemId) {
            case '1':
                para.textContent = 'Первый вариант';
                ellipse.style.top = '0px';
                break;
            case '2':
                para.textContent = 'Второй вариант';
                ellipse.style.top = '85px';
                break;
            case '3':
                para.textContent = 'Третий вариант';
                ellipse.style.top = '165px';
                break;
            case '4':
                para.textContent = 'Четвертый вариант';
                ellipse.style.top = '250px';
                break;
        }
    }
})
bttn.onclick = function () {
    bg.classList.toggle('blue');
}

arrow.onclick = function() {
    
}
