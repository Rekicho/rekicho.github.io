window.onload = () => {
    document.querySelectorAll("#fruits > .row > div")
        .forEach((square) => square.addEventListener("click", chooseFruit));

    document.querySelectorAll("#squares > .row > div")
        .forEach((square) => square.addEventListener("click", selectSquare));

    document.querySelector("button").addEventListener("click", resetFruits);
};

let selected = "";

const chooseFruit = (e) => {
    const fruit = e.target;
    const section = fruit.parentElement.parentElement;

    [...section.children].forEach((div) => {
        [...div.children].forEach((node) => {
            node.classList.remove("selected");
        })
    })

    selected = fruit.classList[0];

    fruit.classList.add("selected");
}

const selectSquare = (e) => {
    const square = e.target;

    square.className = square.className === selected ? "" : selected;
}

const resetFruits = (e) => {
    const section = document.querySelector("#squares");

    [...section.children].forEach((div) => {
        [...div.children].forEach((node) => {
            node.className = "";
        })
    })
}