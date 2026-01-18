
function staggerReveal(selector, {
    delay = 1300,
    interval = 2000,
    activeClass = "show"
} = {}) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elements, index) => {
        setTimeout(() => {
            elements.classList.add(activeClass);
        }, delay + index * interval);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    staggerReveal("#categories li", {
        delay: 4000,
        interval: 1200,
        activeClass: "show"
    });
});




// side panel slide

let panel = document.getElementById("sidePanel");
const carousels = document.querySelectorAll(".carousel");

document.querySelectorAll("#categories button").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        // Slide panel in if not visible
        if (!panel.classList.contains("visible")) {
            panel.classList.add("visible");
        }

        // Hide all carousels
        carousels.forEach(c => c.classList.remove("active"));

        // Show the selected one
        document.getElementById(target).classList.add("active");
    });
});

function hideSidePanel(){
    if (panel.classList.contains("visible")) {
            panel.classList.remove("visible");
        }

};

//categories reveal
let carousel1=document.getElementById("carousel1");
let carousel2=document.getElementById("carousel2");
let carousel3=document.getElementById("carousel3");
let carousel4=document.getElementById("carousel4");

 function revealDIY(){
    carousel2.classList.remove("active");
    carousel3.classList.remove("active");
    carousel4.classList.remove("active");

    carousel1.classList.add("active");
 }

 function revealTECH(){
    carousel1.classList.remove("active");
    carousel3.classList.remove("active");
    carousel4.classList.remove("active");

    carousel2.classList.add("active");
 }

 function revealENVIROMENTAL(){
    carousel1.classList.remove("active");
    carousel2.classList.remove("active");
    carousel4.classList.remove("active");

    carousel3.classList.add("active");
 }

 function revealART(){
    carousel1.classList.remove("active");
    carousel2.classList.remove("active");
    carousel3.classList.remove("active");

    carousel4.classList.add("active");
 }

// carousel function

const diyTrack = document.querySelector(".diy-track");
const diySlides = document.querySelectorAll(".diy");
const dots = document.querySelectorAll(".diyDot");

let diyIndex = 0;

//diy navigate

function updateCarousel() {
    diyTrack.style.transform = `translateX(-${diyIndex * 100 / diySlides.length}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[diyIndex].classList.add("active");
}

document.querySelector(".left").addEventListener("click", () => {
    diyIndex = (diyIndex === 0) ? diySlides.length - 1 : diyIndex - 1;
    updateCarousel();
});

document.querySelector(".right").addEventListener("click", () => {
    diyIndex = (diyIndex === diySlides.length - 1) ? 0 : diyIndex + 1;
    updateCarousel();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        diyIndex = i;
        updateCarousel();
    });
});

//tech navigate

const techTrack = document.querySelector(".tech-track");
const techSlides = document.querySelectorAll(".tech");
const techDots = document.querySelectorAll(".techDots");

let techIndex = 0;

function updateTechCarousel() {
    techTrack.style.transform = `translateX(-${techIndex * 100 / techSlides.length}%)`;

    techDots.forEach(dot => dot.classList.remove("active"));
    techDots[techIndex].classList.add("active");
}
/*
document.querySelector(".techLeft").addEventListener("click", () => {
    techIndex = (techIndex === 0) ? techSlides.length - 1 : techIndex - 1;
    updateTechCarousel();
});

document.querySelector(".techRight").addEventListener("click", () => {
    techIndex = (techIndex === techSlides.length - 1) ? 0 : techIndex + 1;
    updateTechCarousel();
});
*/
techDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        techIndex = i;
        updateCarousel();
    });
});

//enviromentl navigate

const enviromentalTrack = document.querySelector(".enviromental-track");
const enviromentalSlides = document.querySelectorAll(".enviromental");
const enviromentalDots = document.querySelectorAll(".enviromentalDots");

let enviromentalIndex = 0;

function updateEnviromentalCarousel() {
    enviromentalTrack.style.transform = `translateX(-${enviromentalIndex * 100 / enviromentalSlides.length}%)`;

    enviromentalDots.forEach(dot => dot.classList.remove("active"));
    enviromentalDots[enviromentalIndex].classList.add("active");
}
/*
document.querySelector(".enviromentalLeft").addEventListener("click", () => {
    enviromentalIndex = (enviromentalIndex === 0) ? enviromentalSlides.length - 1 : enviromentalIndex - 1;
    updateEnviromentalCarousel();
});

document.querySelector(".enviromentalRight").addEventListener("click", () => {
    enviromentalIndex = (enviromentalIndex === enviromentalSlides.length - 1) ? 0 : enviromentalIndex + 1;
    updateEnviromentalCarousel();
});
*/
enviromentalDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        enviromentalIndex = i;
        updateEnviromentalCarousel();
    });
});

//art navigate

const artTrack = document.querySelector(".art-track");
const artSlides = document.querySelectorAll(".art");
const artDots = document.querySelectorAll(".artDots");  

let artIndex = 0;

function updateArtCarousel() {
    artTrack.style.transform = `translateX(-${artIndex * 100 / artSlides.length}%)`;
    artDots.forEach(dot => dot.classList.remove("active"));
    artDots[artIndex].classList.add("active");
}

document.querySelector(".artLeft").addEventListener("click", () => {
    artIndex = (artIndex === 0) ? artSlides.length - 1 : artIndex - 1;
    updateArtCarousel();
});

document.querySelector(".artRight").addEventListener("click", () => {
    artIndex = (artIndex === artSlides.length - 1) ? 0 : artIndex + 1;
    updateArtCarousel();
});

artDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        artIndex = i;
        updateArtCarousel();
    });
});


