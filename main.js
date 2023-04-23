// Getting all the HTML elements
// Form divs
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const last = document.querySelector("#last");

// Navigation buttons
const nextBtnOne = document.querySelector("#next-1");
const prevBtnOne = document.querySelector("#prev-1");
const nextBtnTwo = document.querySelector("#next-2");
const prevBtnTwo = document.querySelector("#prev-2");

// Form internals
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");



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
// Hide second div and show last div
nextBtnTwo.addEventListener("click", () => {
    second.style.display = "none";
    last.style.display = "flex";
});

// Hide last div and show second div
prevBtnTwo.addEventListener("click", () => {
    last.style.display = "none";
    second.style.display = "flex";
})
