let dropdownOne = document.getElementById("dropdownOne");

dropdownOne.addEventListener("click", () => {
  dropdownOne.classList.toggle("active");

  let submenuOne = document.getElementById("submenuOne");
  submenuOne.classList.toggle("active");

  if (dropdownOne.classList.contains("active")) {
    let caretdown = document.getElementById("caretdown");
    caretdown.classList.remove("fa-angle-down");
    caretdown.classList.add("fa-angle-up");
  } else {
    caretdown.classList.add("fa-angle-down");
    caretdown.classList.remove("fa-angle-up");
  }
});

let dropdownTwo = document.getElementById("dropdownTwo");

dropdownTwo.addEventListener("click", () => {
  dropdownTwo.classList.toggle("active");

  let submenuTwo = document.getElementById("submenuTwo");
  submenuTwo.classList.toggle("active");

  if (dropdownTwo.classList.contains("active")) {
    let caretdownOne = document.getElementById("caretdownOne");
    caretdownOne.classList.remove("fa-angle-down");
    caretdownOne.classList.add("fa-angle-up");
  } else {
    caretdownOne.classList.add("fa-angle-down");
    caretdownOne.classList.remove("fa-angle-up");
  }
});

let menuBTN = document.getElementById("menuBTN");

menuBTN.addEventListener("click", () => {
  menuBTN.classList.add("active");

  let nav = document.getElementById("nav");
  nav.classList.add("active");  

  let bgblack = document.getElementById("bg-black");

  if (nav.classList.contains("active")) {
    bgblack.classList.toggle("active");
    bgblack.classList.remove("inactive");
  } else {
    bgblack.classList.remove("active");
    bgblack.classList.toggle("inactive");
  }

  let menuBTNav = document.getElementById("menuBTNav");
  menuBTNav.addEventListener("click", () => {
    nav.classList.remove("active");
     bgblack.classList.remove("active");
  });
});
