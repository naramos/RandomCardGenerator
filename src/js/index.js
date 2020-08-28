/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".number").innerHTML = generateRandomNumber();
  let suits = document.querySelectorAll(".suit");
  let randomSuit = generateRandomSuit();
  for (let suit of suits) {
    //^^for of loop
    suit.innerHTML = randomSuit.suit;
    suit.style.color = randomSuit.color;
  }
  //document.querySelectorAll("#symbol").classList.add(generateRandomSuit());
  //document.querySelectorAll(".symbolbottom").innerHTML = generateRandomSuit();
};

let generateRandomNumber = () => {
  var numbers = [
    "A",
    "K",
    "Q",
    "J",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  var pokersuit = [
    { suit: "♦", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♥", color: "red" },
    { suit: "♣", color: "black" }
  ];

  let indexSuit = Math.floor(Math.random() * pokersuit.length);
  return pokersuit[indexSuit];
};
