const navMobile = function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.standard-ul');

    burger.addEventListener('click', function() {
        nav.classList.toggle('burger-show');
    });
}

navMobile();

