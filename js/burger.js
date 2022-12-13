var burger = document.querySelector('.burger');
var list = document.querySelector('.header__nav');
var body = document.querySelector('body');
var expMenu = document.querySelector('.experience__menu');
var headLinks = document.querySelectorAll('.header__link');

burger.onclick = function(){
    list.classList.toggle("active");
    body.classList.toggle("fixed-page");
    burger.classList.toggle("active");
    expMenu.classList.toggle('none');
}

headLinks.forEach((headLink)=>{
    headLink.onclick = function(){
        list.classList.remove("active");
        body.classList.remove("fixed-page");
        burger.classList.remove("active");
        expMenu.classList.remove('none');
    }
})