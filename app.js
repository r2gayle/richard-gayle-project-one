const navMobile = function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.standard-ul');
    const burgerLineOne = document.querySelector('.line-1');
    const burgerLineTwo = document.querySelector('.line-2');
    const burgerLineThree = document.querySelector('.line-3');

    burger.addEventListener('click', function() {
        nav.classList.toggle('burger-show');
        burgerLineOne.classList.toggle('line-1-active');
        burgerLineTwo.classList.toggle('line-2-active');
        burgerLineThree.classList.toggle('line-3-active');
    });
}

navMobile();

