const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const calculate = document.querySelector("#calculate-btn");
const outputdiv = document.querySelector("#output");
const mainContainer = document.querySelector("#main"); //doubt about const


//click handler
let clickHandler = () => {
  let total = 0;
  let profitPercent = 0;

  let amtInvested = initialPrice.value * quantity.value;
  let currentValue = currentPrice.value * quantity.value;

  total = currentValue - amtInvested;
  profitPercent = (total / amtInvested) * 100;

  if (total === 0) {
    outputdiv.innerText = `No pain no gain. Keep HUSTLING!`;
  } else {
    if (total > 0) {
      outputdiv.innerText = `Your profit is ₹ ${total} and profit percentage is ${profitPercent} %`;
      mainContainer.style.backgroundColor = "green";
    } else {
      outputdiv.innerText = `Your loss is ₹ ${Math.abs(total)} and loss percentage is ${Math.abs(profitPercent)} %`;
      mainContainer.style.backgroundColor = "red";
    }
  }
};

calculate.addEventListener("click", clickHandler);//if we push the before the functin def, code breaks