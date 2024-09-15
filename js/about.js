const cards = document.querySelectorAll('.s');
let timer = 100

document.addEventListener('DOMContentLoaded', function(){
    cards.forEach((e) => {
        setInterval(() => {
            e.classList.add('fade');
        }, timer);
        timer+=200;
    });
});