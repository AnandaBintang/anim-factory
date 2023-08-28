$(document).ready(() => {
  imageResponsive();

  $("#preloader").addClass("preload-none");

  setTimeout(() => {
    $("#preloader").remove();
  }, 500);
});

// navbar button
let navBtn = $("#nav-button");
let menu = $(".menu-wrapper");

navBtn.click(function () {
  if (navBtn.hasClass("open")) {
    navBtn.toggleClass("open");
    navBtn.css("transform", "rotate(0deg)");
    menu.css("opacity", "0");
    menu.css("pointer-events", "none");
    menu.css("z-index", "50");
    $("body").css("overflow", "auto");
    setTimeout(function () {
      menu.css("pointer-events", "none");
      menu.css("z-index", "50");
    }, 275);
  } else {
    navBtn.toggleClass("open");
    // navBtn.css("transform", "rotate(180deg)");
    menu.css("opacity", "1");
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      menu.css("pointer-events", "auto");
      menu.css("z-index", "auto");
    }, 275);
  }
});

// Cursor
const cursorInner = document.querySelector(".cursor");
const cursor = document.querySelector("#cursor");
const cursorCircle = cursor.querySelector(".cursor-circle");

const menuItem1 = document.querySelector("#m-item-1");
const menuItem2 = document.querySelector("#m-item-2");
const menuItem3 = document.querySelector("#m-item-3");
const menuItem4 = document.querySelector("#m-item-4");
const menuItem5 = document.querySelector("#m-item-5");

menuItem1.addEventListener("mouseenter", (e) => {
  menuItem2.style.opacity = ".12";
  menuItem3.style.opacity = ".12";
  menuItem4.style.opacity = ".12";
  menuItem5.style.opacity = ".12";
});
menuItem1.addEventListener("mouseleave", (e) => {
  menuItem2.style.opacity = "1";
  menuItem3.style.opacity = "1";
  menuItem4.style.opacity = "1";
  menuItem5.style.opacity = "1";
});
menuItem2.addEventListener("mouseenter", (e) => {
  menuItem1.style.opacity = ".12";
  menuItem3.style.opacity = ".12";
  menuItem4.style.opacity = ".12";
  menuItem5.style.opacity = ".12";
});
menuItem2.addEventListener("mouseleave", (e) => {
  menuItem1.style.opacity = "1";
  menuItem3.style.opacity = "1";
  menuItem4.style.opacity = "1";
  menuItem5.style.opacity = "1";
});
menuItem3.addEventListener("mouseenter", (e) => {
  menuItem1.style.opacity = ".12";
  menuItem2.style.opacity = ".12";
  menuItem4.style.opacity = ".12";
  menuItem5.style.opacity = ".12";
});
menuItem3.addEventListener("mouseleave", (e) => {
  menuItem1.style.opacity = "1";
  menuItem2.style.opacity = "1";
  menuItem4.style.opacity = "1";
  menuItem5.style.opacity = "1";
});
menuItem4.addEventListener("mouseenter", (e) => {
  menuItem1.style.opacity = ".12";
  menuItem2.style.opacity = ".12";
  menuItem3.style.opacity = ".12";
  menuItem5.style.opacity = ".12";
});
menuItem4.addEventListener("mouseleave", (e) => {
  menuItem1.style.opacity = "1";
  menuItem2.style.opacity = "1";
  menuItem3.style.opacity = "1";
  menuItem5.style.opacity = "1";
});
menuItem5.addEventListener("mouseenter", (e) => {
  menuItem1.style.opacity = ".12";
  menuItem2.style.opacity = ".12";
  menuItem3.style.opacity = ".12";
  menuItem4.style.opacity = ".12";
});
menuItem5.addEventListener("mouseleave", (e) => {
  menuItem1.style.opacity = "1";
  menuItem2.style.opacity = "1";
  menuItem3.style.opacity = "1";
  menuItem4.style.opacity = "1";
});

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

window.addEventListener("mousemove", updateCoordinates);

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((curosrModifier) => {
  curosrModifier.addEventListener("mouseenter", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.add(className);
    cursorInner.style.opacity = "0";
  });

  curosrModifier.addEventListener("mouseleave", function () {
    const className = this.getAttribute("cursor-class");
    cursor.classList.remove(className);
    cursorInner.style.opacity = "1";
  });
});
