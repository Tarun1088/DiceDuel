function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var ok1 = "images/" + "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", ok1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var ok2 = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", ok2);

  var resultText = "";
  if (randomNumber1 === randomNumber2) {
    resultText = "It's a draw!";
  } else if (randomNumber1 < randomNumber2) {
    resultText = "Player of Shadows wins! 🚩";
  } else {
    resultText = "🚩 Player of Light wins!";
  }

  document.querySelector("h1").innerHTML = resultText;
}

document.getElementById("reloadButton").addEventListener("click", rollDice);
