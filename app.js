console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

const favNumber = 7;
let answer = window.prompt("input a number");

console.log(answer);

if (answer < favNumber) {
  console.log("Too low!!");
} else if (answer > favNumber) {
  console.log("too high");
}
if (answer == favNumber) {
  console.log("Congratulations!!");
}

// exercise 2 //

let birthMonth = window.prompt("What is your birth month?");

switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log("Winter..is coming");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
}
console.log(birthMonth);
// exercise 3 //

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
    break;
}

// if (typeId) {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);
