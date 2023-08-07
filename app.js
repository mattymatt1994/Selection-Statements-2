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

let type = "01";
let color = "BL";
let size = "XL";

switch (typeId == "01") {
  case "Tank top":
    break;
}
switch (typeId == "02") {
  case "T-Shirt":
    break;
}

switch (typeId == "03") {
  case "Long Sleeve":
    break;
}
switch (typeId == "04") {
  case "Sweat Shirt":
    break;
}
if (typeId == "Other")
  if (colorId == "BL") {
    color = "Black";
  } else if (colorId == "BL") {
    color = "Blue";
  } else if (colorId == "RD") {
    color = "Red";
  } else if (colorId == "PU") {
    color = "Purple";
  } else {
    color = "White";
  }

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
