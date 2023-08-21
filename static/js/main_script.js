

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

