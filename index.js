const background = document.querySelector("body");
const controls = document.querySelector("#controls");
const redControl = controls.querySelector("#red-control");
const greenControl = controls.querySelector("#green-control");
const blueControl = controls.querySelector("#blue-control");

let redValue = redControl.value;
let greenValue = greenControl.value;
let blueValue = blueControl.value;

redControl.addEventListener("input", event => {
  redValue = event.target.value;
});
greenControl.addEventListener("input", event => {
  greenValue = event.target.value;
});
blueControl.addEventListener("input", event => {
  blueValue = event.target.value;
});

setInterval(setBGColor, 10);

function setBGColor() {
  console.log("i am changing", redValue);
  background.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}
