var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var calculate = document.querySelector("#calculate-btn");
var outputdiv = document.querySelector("#output");
var mainContainer = document.querySelector("#main");

calculate.addEventListener("click", clickHandler);

//click handler
function clickHandler() {
  var total = 0;
  var profitPercent = 0;

  var amtInvested = initialPrice.value * quantity.value;
  var currentValue = currentPrice.value * quantity.value;

  total = currentValue - amtInvested;
  profitPercent = (total / amtInvested) * 100;

  if (total === 0) {
    outputdiv.innerText = "No pain no gain. Keep HUSTLING!";
  } else {
    if (total > 0) {
      outputdiv.innerText =
        "Your profit is ₹ " +
        total +
        " and profit percentage is " +
        profitPercent +
        " %";
        mainContainer.style.backgroundColor = "green";
    } else {
      outputdiv.innerText =
        "Your loss is ₹ " +
        Math.abs(total) +
        " and loss percentage is " +
        Math.abs(profitPercent) +
        " %";
        mainContainer.style.backgroundColor = "red";
    }
  }
}
