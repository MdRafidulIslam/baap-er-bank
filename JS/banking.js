function getInputValue(inputId) {
  const inputFeild = document.getElementById(inputId);
  const inputAmountText = inputFeild.value;
  const amountValue = parseFloat(inputAmountText);
  inputFeild.value = "";
  return amountValue;
}

function totalAmount(inputId, newDepositeAmount) {
  const depositeTotal = document.getElementById(inputId);
  const previousDepositeText = depositeTotal.innerText;
  const previousDepositeAmount = parseFloat(previousDepositeText);
  depositeTotal.innerText = newDepositeAmount + previousDepositeAmount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  return previousBalanceTotal;
}

function update(newDepositeAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");

  const previousBalanceTotal = getCurrentBalance();

  if (isAdd == true) {
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;
  } else {
    const newBalanceTotal = previousBalanceTotal - newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;
  }
}

document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const newDepositeAmount = getInputValue("deposite-input");

    if (newDepositeAmount > 0) {
      totalAmount("deposite-total", newDepositeAmount);
      update(newDepositeAmount, true);
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
      totalAmount("withdraw-total", newWithdrawAmount);
      update(newWithdrawAmount, false);
    }
  });
