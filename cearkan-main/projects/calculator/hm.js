var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector("#screen");
var btnOpt = document.querySelectorAll("#btnOpt");
var optState = false;
var opt = "";
var final = 0;

btnNumber.forEach((number) => {
  number.addEventListener("click", showNumber);

  function showNumber() {
    this.style.fontsize = "25px";
    if (screen.textContent == "0" || optState) {
      screen.textContent = "";
    }
    screen.textContent += this.textContent;
    optState = false;

    setTimeout(() => {
      this.style.fontsize = "15px";
    }, 500);
  }
});

btnOpt.forEach((operator) => {
  operator.addEventListener("click", calculator);

  function calculator() {
    optState = true;
    var newOpt = this.textContent;

    switch (opt) {
      case "+":
        screen.textContent = final + Number(screen.textContent);
        break;
      case "-":
        screen.textContent = final - Number(screen.textContent);
        break;
      case "*":
        screen.textContent = final * Number(screen.textContent);
        break;
      case "/":
        screen.textContent = final / Number(screen.textContent);
        break;
      case "C":
        screen.textContent = screen.textContent.slice(0, -1);
        if (screen.textContent.length < 1) {
          screen.textContent = 0;
        }
        break;
      case "=":
        final = Number(screen.textContent);
        break;
    }

    final = Number(screen.textContent);
    opt = newOpt;
  }
});