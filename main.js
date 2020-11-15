const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("#colorToggler");
const colorValue = document.querySelector(".colorValue");
const tooltip = document.querySelector(".tooltip");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = ["F", "F", "F", "F", "F", "F"];

function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function toggleColor() {
  color = [];
  for (let i = 0; i < 6; i++) {
    let num = random(hex.length);
    color.push(hex[num]);
  }
  wrapper.style.background = `#${color.join("")}`;
  colorValue.value = `#${color.join("")}`;
  tooltip.innerHTML = "Click to copy";
}

function copyValue() {
  colorValue.select();
  document.execCommand("copy");
  tooltip.innerHTML = `Copied to clipboard: #${color.join("")}`;
}
function userToggle() {
  toggleColor();
  clearInterval(refreshing);
}
function userCopy() {
  copyValue();
  clearInterval(refreshing);
}

const refreshing = setInterval(toggleColor, 3500);

button.addEventListener("click", userToggle);
colorValue.addEventListener("click", userCopy);
