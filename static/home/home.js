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


const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}

function clickBtn1() {
    const arr = [];
    const chk1 = document.form1.chk1;

    for (let i = 0; i < chk1.length; i++) {
      if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
        arr.push(chk1[i].value);
      }
    }
    document.getElementById("span1").textContent = arr;
  }

