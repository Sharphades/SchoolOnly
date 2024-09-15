const haha = document.querySelectorAll('.s');
let oh = 100;
let alamkungmalayomagingkami = oh;

document.addEventListener('DOMContentLoaded', function(){
    haha.forEach((e) => {
        setInterval(() => {
            e.classList.add('putangina');
        }, alamkungmalayomagingkami);
        alamkungmalayomagingkami+=200;
    });
});