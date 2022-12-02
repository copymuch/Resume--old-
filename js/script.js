let bttn = document.querySelector('.hero__text-content');
let bg = document.querySelector('.hero');
let expItems = document.querySelectorAll('.experience__item');
let para = document.querySelector('.info-para');
let ellipse = document.querySelector('.ellipse');

ellipse.style.top = '30px';

expItems.forEach((expItem) => {
    expItem.onclick = function() {
        let expItemId = expItem.id;
        switch(expItemId) {
            case '1':
                para.textContent = 'Первый вариант';
                ellipse.style.top = '30px';
                break;
            case '2':
                para.textContent = 'Второй вариант';
                ellipse.style.top = '114px';
                break;
            case '3':
                para.textContent = 'Третий вариант';
                ellipse.style.top = '195px';
                break;
            case '4':
                para.textContent = 'Четвертый вариант';
                ellipse.style.top = '280px';
                break;
        }
    }
})
bttn.onclick = function () {
    bg.classList.toggle('blue');
}
