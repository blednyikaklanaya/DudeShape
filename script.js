let buttonArray = document.getElementsByClassName("switcher-button");
let switcherImg = document.getElementsByClassName("switcher-img")[0];
let reccalCircleImg = document.getElementsByClassName("reccal-green-circle")[0];

console.log(reccalCircleImg); // debug

function observerChecker (nameElement, nameClass, loaded) {

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(nameClass);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: loaded});
    
    observer.observe(nameElement);

}

document.addEventListener("DOMContentLoaded", () => {
    observerChecker(switcherImg, "visible", 0.1);
    observerChecker(reccalCircleImg, "visible-cirle", 0.1);

    let allElements = Array.from(document.getElementsByTagName("*")).filter(el => !["SCRIPT", "STYLE", "META", "LINK"].includes(el.tagName));
    console.log(allElements); 

    allElements.forEach(element => observerChecker(element, "unlock", 0.1));
});


function handleClickButton(button) {
    for ( let button of buttonArray ) {
        button.classList.remove("active-button");
    }

    setTimeout(() => {
        button.classList.toggle("active-button");
    }, 50)
}

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", () => {
        handleClickButton(buttonArray[i]);
        console.log("click!");// debug
    })
}