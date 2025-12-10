// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// SETATTRIBUTE: https://www.w3schools.com/jsref/met_element_setattribute.asp
function disappear1() {
  document.getElementById("flower-img1").style.display = "none";
  document.getElementById("my-flowerclick").play();
}
function disappear2() {
  document.getElementById("flower-img2").style.display = "none";
  document.getElementById("my-flowerclick").play();
}
function disappear3() {
  document.getElementById("flower-img3").style.display = "none";
  document.getElementById("my-flowerclick").play();
}
function moveFood() {
  document.getElementById("orangeSushi1").classList.add("move-forward");
  document.getElementById("redSushi1").classList.add("move-forward");
  document.getElementById("orangeSushi2").classList.add("move-forward");
  document.getElementById("blueSushi1").classList.add("move-forward");
  document.getElementById("redSushi2").classList.add("move-forward");
}
function moveFoodback() {
  document.getElementById("orangeSushi1").classList.remove("move-forward");
  document.getElementById("orangeSushi1").classList.add("move-backward");
  document.getElementById("redSushi1").classList.remove("move-forward");
  document.getElementById("redSushi1").classList.add("move-backward");
  document.getElementById("orangeSushi2").classList.remove("move-forward");
  document.getElementById("orangeSushi2").classList.add("move-backward");
  document.getElementById("blueSushi1").classList.remove("move-forward");
  document.getElementById("blueSushi1").classList.add("move-backward");
  document.getElementById("redSushi2").classList.remove("move-forward");
  document.getElementById("redSushi2").classList.add("move-backward");
  document.getElementById("my-click").play();
}
