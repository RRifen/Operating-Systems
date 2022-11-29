let pops = document.querySelectorAll(".pop");

for(let pop of pops) {
    pop.style.transition = "200ms ease-in-out";
}

let deleted = [];
let sumP = document.getElementById("sum");
let redCrosses = document.querySelectorAll("#cross");
for(let element of redCrosses) {
    element.onclick = function () {
        let parent = element.parentNode;
        deleted.push(parent);
        let width = screen.width;
        if (window.innerWidth <= 850) {
            parent.style.display = "none";
        }
        parent.style.opacity = "0";
        parent.style.pointerEvent = "none";
        element.style.display = "none";
        (document.querySelectorAll("." + parent.classList[2] + " .osImage"))[0].style.pointerEvents = "none";
        let basketNote = document.getElementById("basketNote");
        basketNote.textContent = `${deleted.length}/7`;
        afterDelete(basketNote);
    }
}

let basket = document.getElementById("basket");
basket.onclick = afterDeletion;

let osImages = document.querySelectorAll(".osImage");
for(let element of osImages) {
    element.onclick = function () {
        let id = element.id;
        id = id + "pop";
        document.getElementById(id).classList.add('active');
        document.getElementById("overlay").classList.add('active');
    }
}

let closePopButtons = document.querySelectorAll(".closePop");
for(let element of closePopButtons) {
    element.onclick = function () {
        element.closest(".pop").classList.remove('active');
        overlay.classList.remove('active');
        basketUpdate(element.closest(".pop"));
    }
}


let overlay = document.getElementById("overlay");
overlay.onclick = function () {
    let activepops = document.querySelectorAll('.pop.active')
    activepops.forEach(element => {
      element.classList.remove('active');
    })
    overlay.classList.remove('active');
    basketUpdate(activepops[0]);
}

function afterDelete(basketNote) {
    if (basketNote.textContent == "7/7") {
        document.getElementById("like").classList.add('active');
        document.getElementById("overlay").classList.add('active');
        afterDeletion();
    }
}

function afterDeletion() {
    for(let element of deleted) {
        element.style.display = "flex";
        element.style.opacity = "1";
    }
    for (let element of document.querySelectorAll(".osImage")) {
        element.style.pointerEvents = "auto";
    }
    for(let cross of redCrosses) {
        cross.style.display = "block";
    }
    deleted = [];
    let basketNote = document.getElementById("basketNote");
    basketNote.textContent = `${deleted.length}/7`;
}

function basketUpdate(element) {
    if (element.id == "like") {
        return;
    }
    let elementForDelete = document.querySelectorAll("." + element.id + "P")[0];
    deleted.push(elementForDelete);
    if (window.innerWidth <= 850) {
        elementForDelete.style.display = "none";
    }
    elementForDelete.style.opacity = "0";
    elementForDelete.style.pointerEvent = "none";
    (document.querySelectorAll("." + element.id + "P #cross"))[0].style.display = "none";
    (document.querySelectorAll("." + element.id + "P .osImage"))[0].style.pointerEvents = "none";
    let basketNote = document.getElementById("basketNote");
    basketNote.textContent = `${deleted.length}/7`;
    afterDelete(basketNote);
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
  
    burger.addEventListener("click", () => {
      let basket = document.getElementById("bsWrapper");
      if (basket.style.opacity == "0") {
        basket.style.opacity = "1";
        basket.style.pointerEvents = "auto";
      } else {
        basket.style.opacity = "0";
        basket.style.pointerEvents = "none";
      }
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();