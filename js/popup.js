const title = document.querySelector('.title');
const description = document.querySelector('.description');
const button = document.querySelector('.button');
const carousel = document.getElementById('carouselExampleAutoplaying');



document.addEventListener('DOMContentLoaded', function(){
    title.classList.add('negrow');
    setInterval(() => {
        description.classList.add('negrow');
    },200);
    setInterval(() => {
        button.classList.add('negrow');
    },400);
    setInterval(() => {
        carousel.classList.add('negrow');
    },1000);
});