console.log('aa');
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn-header");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open")
}

mask.onclick = () => {
    nav.classList.toggle("open")
}