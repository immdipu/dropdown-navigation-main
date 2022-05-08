"use strict";
const navBtn = document.querySelectorAll(".navbtn");
const navBtn2 = document.querySelectorAll(".navbtn2");
const closeBTn = document.getElementById("closebutton");
const showBtn = document.getElementById("showbtn");
const hamburgerContainer = document.querySelector(".hamburgercontainer");
const overLay = document.querySelector(".overlay");

for (const items of navBtn) {
    items.addEventListener("click", function () {
        items.classList.toggle("activate");
    });
}

for (const items2 of navBtn2) {
    items2.addEventListener("click", function () {
        items2.classList.toggle("activate2");
    });
}

showBtn.addEventListener("click", function () {
    hamburgerContainer.classList.add("show");
    overLay.classList.remove("hidden");
});

closeBTn.addEventListener("click", function () {
    hamburgerContainer.classList.remove("show");
    overLay.classList.add("hidden");
});

overLay.addEventListener("click", function () {
    hamburgerContainer.classList.remove("show");
    overLay.classList.add("hidden");
});
