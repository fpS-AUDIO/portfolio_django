

////////////////////////
// TYPEWRITING HEADER //
////////////////////////



const headerText = document.querySelector("#header-text");
const textLoad = () => {
    setTimeout(() => {
        headerText.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        headerText.textContent = "Problem solver";
    }, 4000);
    setTimeout(() => {
        headerText.textContent = "Teaholic";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
