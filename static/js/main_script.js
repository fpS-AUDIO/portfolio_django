

////////////////////////
// TYPEWRITING HEADER //
////////////////////////

const text = document.querySelector(".jumbo-span");
const texts = [
    "Web Developer",
    "Problem Solver",
    "Teaholic"
];

let currentTextIndex = 0;

const updateAnimation = () => {
    const contentWidth = text.clientWidth * 2;
    const steps = Math.round(contentWidth);
    const animationValue = "flashing-border 800ms step-start infinite both, moving-span-after 5000ms steps(${steps}) infinite";
    text.style.animation = animationValue;
};

const textLoad = () => {
    text.textContent = texts[currentTextIndex];
    updateAnimation();

    currentTextIndex = (currentTextIndex + 1) % texts.length;
};

textLoad();
setInterval(textLoad, 5000);





////////////////////////
//// Theme Switcher ////
////////////////////////

let themeSwitcher = document.getElementById("themeSwitch");
let logoImage = document.getElementById("logo-img");
let HeaderBgImg = document.getElementById("HeaderId");

themeSwitcher.onclick = function () {
    document.body.classList.toggle("light-theme");
    /*     if (document.body.classList.contains("light-theme")) {
            HeaderBgImg.style.backgroundImage = `url('${HeaderBgImg.getAttribute('data-light-bg')}')`;
        } else {
            HeaderBgImg.style.backgroundImage = `url('${HeaderBgImg.getAttribute('data-dark-bg')}')`;
        } */
};





//////////////////////////////////////
//// Header Animations Bug Fixing ////
//////////////////////////////////////

// Add a delay before applying the animation on the delayed element
// ELEMENT: <h2 class="animated-title anime-delay">a Full-Stack Web Developer</h2>
setTimeout(function () {
    document.querySelector('.anime-delay').style.borderRight = '4px solid var(--clr-flashing-border)';
}, 4000); // Adjust the delay time as needed





//////////////////////////////////////
//// ............................ ////
//////////////////////////////////////



















