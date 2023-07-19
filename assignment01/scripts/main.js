//This is the javascript main file where all of the main functionality like 
//Opening and closing drawer menu will be here

let drawer = document.getElementById('drawer');

let openIcon = document.getElementById('openIcon');

//Function to capture the open icon click
function openMenu(){
    drawer.style.display = 'block';
    drawer.style.left = 'calc(100% - 300px)';
}

openIcon.addEventListener('click',openMenu);


let closeIcon = document.getElementById('closeIcon');

//Function to capture the open icon click
function closeMenu(){
    drawer.style.left = '100%';
    drawer.style.display = 'none';
}

closeIcon.addEventListener('click',closeMenu);


//Common functions for redirects
function redirectStopwatch(){
    window.location.replace('./stopwatch.html');
}

function redirectCarousel(){
    window.location.replace('./carousel.html');
}