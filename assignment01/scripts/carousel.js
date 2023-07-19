let gridSection = document.getElementById('gridSection');
let showAll = document.getElementById('showAll');
let isShowing = false;


//Function to show the grid image viewer on button click
function showGrid(){
    if(!isShowing){
        showAll.textContent = 'Show Less';
        gridSection.style.display = 'flex';
        isShowing = true;
    } else {
        showAll.textContent = 'Show All';
        gridSection.style.display = 'none';
        isShowing = false;
    }
}
showAll.addEventListener('click',showGrid);

//Swiper JS code to create the slideshow effect
var TrandingSlider = new Swiper('.image-slider', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});