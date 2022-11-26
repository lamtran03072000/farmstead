function darkandlight() {
  const css = document.getElementById("cssfile");
  const dmb = document.getElementById("icon2");
  var moon = `<i class="fa fa-moon"></i>`;
  var sun = `<i class="fa fa-sun"></i>`;

  if (dmb.innerHTML == moon) {
    css.setAttribute("href", "./indexdark.css");
    dmb.innerHTML = sun;
  } else {
    css.setAttribute("href", "./index.css");
    dmb.innerHTML = moon;
  }
}
function btnmenu() {
  var headerMenu = document.getElementById("headerMenu");
  if (headerMenu.style.height == "300px") {
    headerMenu.style.height = "0px";
  } else {
    headerMenu.style.height = "300px";
  }
  console.log(headerMenu.style.height);
}

// ONSCROLL;
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var textScroll = document.getElementById("text-scroll");
var textScroll1 = document.getElementById("icon1");
var textScroll2 = document.getElementById("icon2");
var textScroll3 = document.getElementById("icon3");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    textScroll.classList.add("colorblack");
    textScroll2.classList.add("colorblack");
    textScroll3.classList.add("colorblack");
    textScroll1.classList.add("colorblack");
  } else {
    header.classList.remove("sticky");
    textScroll.classList.remove("colorblack");
    textScroll1.classList.remove("colorblack");
    textScroll2.classList.remove("colorblack");
    textScroll3.classList.remove("colorblack");
  }
}
