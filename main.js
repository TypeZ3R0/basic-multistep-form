// Getting all the HTML elements
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const nextBtnOne = document.querySelector("#next-1");
const prevBtnOne = document.querySelector("#prev-1");
const nextBtnTwo = document.querySelector("#next-2");

// Hide first div and show second div
nextBtnOne.addEventListener("click", () => {
    first.style.display = "none";
    second.style.display = "flex";
});

// Hide second div and show first div
prevBtnOne.addEventListener("click", () => {
    first.style.display = "flex";
    second.style.display = "none";
});
