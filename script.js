let heading;
let fortuneButton;
let name;
let favNum;
let firstQ;
let secondQ;
let output;
let outputArea;
let halfButton;
let halfInput;
let adjectives = ["amazing", "fantastic", "beautiful", "awesome", "incredible", "great", "outstanding", "lovely", "remarkable"];
let numbers = ["22", "15", "23", "98", "44", "65", "53", "73", "86", "42", "51", "76", "34"];
let colors = ["#8f2d56", "#73d2de", "#218380", "#5e6472", "#ffa69e", "#002855"];
let bgcolors = ["#feeafa", "#d8f3dc", "#e9ecef", "#f7ede2", "#f8edeb", "#f5f3f4"];
let sizes= ["20px", "30px", "45px", "35px", "25", "50", "65", "28px", "55px", "15", "40", "60"];


window.addEventListener('DOMContentLoaded', function() {

  heading = document.getElementById("title");
  fortuneButton = document.getElementById("getFortune");
  output = document.getElementById("fortuneOutput");
  firstQ = document.getElementById("nameQ");
  secondQ = document.getElementById("numberQ");
  outputArea = document.getElementById("outputBox");
  name = document.getElementById("nameA");
  favNum = document.getElementById("numberA");
  halfInput = document.getElementById("half-input");
  halfButton = document.getElementById('half-button');
  fortuneButton.addEventListener("click", fortunerestyle);
  halfButton.addEventListener("click", calculate);


});

function calculate () {
  number=halfInput.value;
  alert("Half of " + number + " is " + number/2);
  console.log("Half of " + number + " is " + number/2);


};

function restyle () {
let randColor=colors[Math.floor (Math.random() * colors.length)];
output.style.color=randColor;
let randbgColor=colors[Math.floor (Math.random() * bgcolors.length)];
output.style.backgroundColor=randbgColor;
let size=sizes[Math.floor (Math.random() * sizes.length)];
output.style.fontSize=size;
outputArea.style.borderColor=randColor;
}

function fortune () {
let nameVal = name.value;
let numVal = favNum.value;
let randAdj = adjectives[Math.floor (Math.random() * adjectives.length)];
let luckyNumbers = numbers[Math.floor (Math.random() * numbers.length)];

// var r = Math.random() * 50 + 80;
// var g = Math.random() * 50 + 130;
// var b = Math.random() * 50 + 180;

// let colorString = "rgb(" + r + "," + g + "," + b + ")";
// let colorShadow = "rgb(" + (r-50) + "," + (g-60) + "," + (b-70) + ")";

// heading.style.color = "rgb(" + (r-50) + "," + (g-40) + "," + (b-30) + ")";
// heading.style.textShadow = "0px 0px 10px " + colorShadow;
// heading.classList.toggle("shadow");
// q1.style.color = colorString;
// q2.style.color = colorString;
//
// var re = Math.random() * 50 + 100;
// var gr = Math.random() * 50 + 150;
// var bl = Math.random() * 50 + 200;

// let boxColor = "rgb(" + re + "," + gr + "," + bl + ")";
// outputDiv.style.backgroundColor = boxColor;
// outputDiv.style.borderColor = "rgb(" + (re-50) + "," + (gr-40) + "," + (bl-30) + ")";

output.innerText = "Hi " + nameVal + ". " + "You will have a/an " + randAdj + " day today. " + "Your lucky numbers are " + numVal + " and " + luckyNumbers + ".";
}

function fortunerestyle () {
  fortune();
  restyle();
}
// document.body.style.backgroundColor = "rgb(" + (r+70) + "," + (g+80) + "," + (b+90) + ")";
