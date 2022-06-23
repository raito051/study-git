console.log('aa');
let arrow_1 = document.querySelector("#arrow-1");
let arrow_2 = document.querySelector("#arrow-2");
let arrow_3 = document.querySelector("#arrow-3");
let arrow_4 = document.querySelector("#arrow-4");
let arrow_5 = document.querySelector("#arrow-5");

let nav_item_1 = document.querySelector('#nav-item');
arrow_2.onclick = () => {
    arrow_2.classList.toggle("rotate-2")
}

arrow_3.onclick = () => {
    arrow_3.classList.toggle("rotate-3")
}

arrow_4.onclick = () => {
    arrow_4.classList.toggle("rotate-4")
}

arrow_5.onclick = () => {
    arrow_5.classList.toggle("rotate-5")
}

var app = new Vue({
    delimiters: ["[[", "]]"],
    el:'#app',
    data(){
        return{
            multiChecked: ["blue", "Green"]
        }
        //複数のcheckbox
    }
})
