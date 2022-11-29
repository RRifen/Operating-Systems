let buttons = document.querySelectorAll(".popButton");
for(let element of buttons) {
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
    }
}

let overlay = document.getElementById("overlay");
overlay.onclick = function () {
    let activepops = document.querySelectorAll('.pop.active')
    activepops.forEach(element => {
      element.classList.remove('active');
    })
    overlay.classList.remove('active');
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
  
    burger.addEventListener("click", () => {
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