import React from "react";
import "./styles.css";

let value = 5;
let answer = value;
let counter = 1;

function factorial(number) {
  if (number === 2) {
    return 2;
  }
  console.log(number * factorial(number - 1));
  return number * factorial(number - 1);
}

function factorialFunction(value) {
  let finalAnswer = value;
  for (i = 1; i < value; i++) {
    finalAnswer = finalAnswer * i;
  }
  console.log(finalAnswer);
  return finalAnswer;
}

factorial(2);
factorialFunction(5);

export default function App() {
  return <div className="App" />;
}
