window.onload = () => {
  let reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      myFunction();
  }
  sessionStorage.setItem("reloading", "true");
};
let myFunction = () => {
  let randomNumber1 = 1 + Math.floor(6 * Math.random());
  let dice1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", dice1);

  let randomNumber2 = 1 + Math.floor(6 * Math.random());
  let dice2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", dice2);

  if (randomNumber1 > randomNumber2) document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  else if (randomNumber2 > randomNumber1) document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  else document.querySelector("h1").innerHTML = "Draw!";
};