//i. game cheat code
const pressedKey = [];
const secretPassword = ["h", "e", "l", "l", "o"];

document.addEventListener("keypress", (event) => {
  pressedKey.push(event.key);
  console.log(event.key);

  //removes oldest object in array
  if (pressedKey.length > 5) {
    pressedKey.shift();
  }

  //check if password has been written
  if (pressedKey.join("") === secretPassword.join("")) {
    alert("Secret password entered!");
  }
});

//ii. x, y coordinates
const printText = document.querySelector("#coordinate");

document.addEventListener("dblclick", (event) => {
  //gets coordinates
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  //prints coordinates on html
  printText.innerHTML = `Doubleklick coordinates are ${mouseX} and ${mouseY}`;
});

//iii. Hover effect
const button = document.querySelector("#button");

button.addEventListener('mouseenter', (event) => {
  console.log("Above button");
});

//iv. Hurry up
const textBox1 = document.querySelector("#notification1");
//insert message to <p> after 15seconds have passed
setTimeout(() => {
  textBox1.innerHTML = `Hurry up!`;
}, 15000);

//v. Hurry up Idle
const textBox2 = document.querySelector("#notification2");
let timer = 0;

//counts 15 and pops up notification
const countDown = setInterval(() => {
  timer++;

  if(timer === 15){
    textBox2.innerHTML = `Hurry up! Idle!`;
    clearInterval(countDown);
  }
}, 1000);

//reset the timer if mouse moved / key pressed
document.addEventListener("keypress", () => {
  timer = 0;
});

document.addEventListener("mousemove", () => {
  timer = 0;
});
