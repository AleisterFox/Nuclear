const menu = document.querySelectorAll(".menu");
const burguerButton = document.querySelector(".menu__button");
const buttons = document.querySelectorAll(".navbarb");
const closeMenu = document.querySelector(".close");
const sideBar = document.querySelector('.sidebar');

burguerButton.addEventListener("click", () => {
  menu.forEach((list) => {
    if (list.style.display != "flex") {
      list.style.display = "flex";
      document.documentElement.style.overflowY = "hidden";
      sideBar.style.animation = "showMenu 0.5s linear";
      burguerButton.style.display = 'none';
    }
  });
});

closeMenu.addEventListener("click", () => {
  menu.forEach((list) => {
    if (list.style.display == "flex") {
      sideBar.style.animation = "hideMenu 0.5s linear";
      
      setTimeout(() => {
        document.documentElement.style.overflowY = "scroll";
        burguerButton.style.display = 'initial';
        list.style.display = "none";
      }, 490);
      
      
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (this.innerWidth < 769) {
      menu.forEach((list) => {
        list.style.animation = "hideMenu 0.5s linear";
        setTimeout(() => {
          list.style.display = "none";
        }, 490);
        burguerButton.classList.remove("fa-x");
        burguerButton.classList.add("fa-bars");
      });
    }
  });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background =
      "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.02))";
  } else {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background =
      "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))";
  }
});
