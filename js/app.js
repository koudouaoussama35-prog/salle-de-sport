const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

const discoverKarate = document.getElementById("discoverkarate");
const discoverFullContact = document.getElementById("discoverFullContact");
const discoverAerobic = document.getElementById("discoverAerobic");

function openKaratePage() {
  window.location.href = "karate.html";
}
function openFullContactPage() {
  window.location.href = "fullContact.html";
  // alert("fghjkl;");
}
function openAerobicPage() {
  window.location.href = "aerobic.html";
  // alert("fghjkl;");
}

discoverKarate.addEventListener("click", openKaratePage);
discoverFullContact.addEventListener("click", openFullContactPage);
discoverAerobic.addEventListener("click", openAerobicPage);
