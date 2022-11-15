"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  console.log(secretNumber, typeof secretNumber);

  //input eger bos girilirse

  if (!guess) {
    displayMessage("Bir Sayı Giriniz.");
  }

  //Sayılar birbiri ile eşleşirse
  else if (guess === secretNumber) {
    displayMessage("Doğru Tahmin!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }

  // sayılar birbiri ile eşleşmiyor ise
  else if (guess !== secretNumber) {
    scoreDusur();
    if (score > 0) {
      displayMessage(guess < secretNumber ? ":Çok Düşük" : "Çok Yüksek");
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Oyunu Kaybettin");
      document.querySelector(".score").textContent = 0;
    }
  }
});

function scoreDusur() {
  score--;
}
document.querySelector(".again").addEventListener("click", function () {
  score = 0;
  secretNumber = Math.floor(Math.random() * 20 + 1);

  displayMessage("Tahmin Ediliyor...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
