let bttn = document.querySelector('.hero__text-content');
let bg = document.querySelector('.hero');
let expItems = document.querySelectorAll('.experience__item');
let para = document.querySelector('.info-para');
let ellipse = document.querySelector('.ellipse');
let expInfo = document.querySelector('.experience__info');


ellipse.style.top = '0px';

expItems.forEach((expItem) => {
    expItem.onclick = function() {
        let expItemId = expItem.id;
        switch(expItemId) {
            case '1':
                para.textContent = 'Первый вариант';
                ellipse.style.top = '0px';
                console.log(expItemId);
                break;
            case '2':
                para.textContent = 'Второй вариант';
                ellipse.style.top = '85px';
                console.log(expItemId);
                break;
            case '3':
                para.textContent = 'Третий вариант';
                ellipse.style.top = '165px';
                console.log(expItemId);
                break;
            case '4':
                para.textContent = 'Четвертый вариант';
                ellipse.style.top = '250px';
                console.log(expItemId);
                break;
        }
    }
})
bttn.onclick = function () {
    bg.classList.toggle('blue');
}

