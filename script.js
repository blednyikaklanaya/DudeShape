let buttonArray = document.getElementsByClassName("switcher-button");

console.log(buttonArray);


function handleClickButton(button) {
    for ( let button of buttonArray ) {
        button.classList.remove("active-button");
    }

    button.classList.toggle("active-button");
}

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", () => {
        handleClickButton(buttonArray[i]);
        console.log("hello!");
    })
}