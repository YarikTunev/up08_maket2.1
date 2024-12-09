/*слайдер*/
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.leftbtn');
const nextButton = document.querySelector('.rightbtn');
const sliders = Array.from(slider.querySelectorAll('.sl'));
const slideConst = sliders.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide(){
    slideIndex = (slideIndex - 1 + slideConst) % slideConst;
    updateSlider();
}
function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideConst;
    updateSlider();
}

function updateSlider(){
    sliders.forEach((slide, index) => {
        if(index === slideIndex){
            slide.style.display = 'block';
        } else{
            slide.style.display = 'none';
        }
    });
}

updateSlider();


/*бургер*/
let menu = document.querySelector("ul");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener('resize', function(){
    if (window.innerWidth > 480 && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active");
    }
});
