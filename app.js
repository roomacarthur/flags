function buttonHover() {
  let button = document.getElementsByClassName("answer");
  for (let i = 0; i < button.length; i++) {
    button[i].onmouseover = function () {
      button[i].classList.add("mobileBtn");
    };
    button[i].onmouseleave = function () {
      button[i].classList.remove("mobileBtn");
    };
  }
}

buttonHover();
