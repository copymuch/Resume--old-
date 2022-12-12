let bttn = document.querySelector('.hero__text-content');
let bg = document.querySelector('.hero');
let expItems = document.querySelectorAll('.experience__item');
let para = document.querySelector('.info-para');
let ellipse = document.querySelector('.ellipse');
let expInfo = document.querySelector('.experience__info');
let arrows = document.querySelectorAll('.arrowDown');
let itemParas = document.querySelectorAll('.item-info');
let active = document.querySelector('.active');


ellipse.style.top = '0px';


expItems.forEach((expItem) => {
    expItem.onclick = function() {
        let expItemId = expItem.id;
        this.classList.toggle('active');


        itemParas.forEach((itemPara)=> {
            let itemParaId = itemPara.id;
            arrows.forEach((arrow)=> {
                let arrowId = arrow.id;
            if (expItemId == 1 && itemParaId == 'ii1' && arrowId == 'arrow1') {
                itemPara.classList.toggle('active');
                arrow.classList.toggle('rotate');
            } else if (expItemId == 2 && itemParaId == 'ii2' && arrowId == 'arrow2') {
                itemPara.classList.toggle('active');
                arrow.classList.toggle('rotate');
            } else if (expItemId == 3 && itemParaId == 'ii3' && arrowId == 'arrow3') {
                itemPara.classList.toggle('active');
                arrow.classList.toggle('rotate');
            } else if (expItemId == 4 && itemParaId == 'ii4' && arrowId == 'arrow4') {
                itemPara.classList.toggle('active');
                arrow.classList.toggle('rotate');
            }
        })
    })



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

