const cvc = document.querySelector(".card-div__zeros");
const first4Num = document.querySelector(".first-4-nums");
const second4Num = document.querySelector(".second-4-nums");
const third4Num = document.querySelector(".third-4-nums");
const forth4Num = document.querySelector(".forth-4-nums");
const userNameOnCard = document.querySelector(".card-div__bottom-name");
const usernameBlankError = document.querySelector(".username-blank-error");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const userNameInput = document.getElementById("card-holder-name");
const cardNumberInput = document.getElementById("card-number");
const monthCardInput = document.getElementById("exp-month");
const yearCardInput = document.getElementById("exp-year");
const cvcInput = document.getElementById("cvc-number");
const mainForm = document.getElementById("main-form");
const confirmBtn = document.getElementById("confirm-btn");
const continueBtn = document.getElementById("continue-btn");
const errorMsgNumbers = document.querySelector(".errorMsgNumbers2");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
const errorCvc = document.querySelector(".error-cvc");
const completeDiv = document.querySelector(".complete-div");

userNameInput.addEventListener("input", function () {
  if (userNameInput.value === "") {
    usernameBlankError.style.visibility = "visible";
    userNameInput.classList.add("border");
    userNameOnCard.textContent = "Jane Appleseed";
  } else {
    userNameOnCard.textContent = userNameInput.value;
    usernameBlankError.style.visibility = "hidden";
    userNameInput.classList.remove("border");
  }
});
cardNumberInput.addEventListener("input", validateCardNumberInput);

function validateCardNumberInput() {
  let cardNumber;

  if (isValidInput(cardNumberInput.value)) {
    cardNumber = cardNumberInput.value;
    first4Num.textContent = cardNumber.slice(0, 4);
    second4Num.textContent = cardNumber.slice(4, 8);
    third4Num.textContent = cardNumber.slice(8, 12);
    forth4Num.textContent = cardNumber.slice(12, 16);
    cardNumberInput.classList.remove("border");
    errorMsgNumbers.style.visibility = "hidden";
    return true;
  } else {
    cardNumber = cardNumberInput.value;
    first4Num.textContent = cardNumber.slice(0, 4);
    second4Num.textContent = cardNumber.slice(4, 8);
    third4Num.textContent = cardNumber.slice(8, 12);
    forth4Num.textContent = cardNumber.slice(12, 16);
    errorMsgNumbers.style.visibility = "visible";
    cardNumberInput.classList.add("border");
    return false;
  }
}

monthCardInput.addEventListener("input", validateMonthInput);

// function to check if month input field is valid

function validateMonthInput() {
  if (!isValidInput(monthCardInput.value)) {
    monthCardInput.classList.add("border");
    month.textContent = "00";
    errorMonth.textContent = "Wrong format, numbers only";
    errorMonth.classList.add("error-month");
    return false;
  } else {
    monthCardInput.classList.remove("border");
  }
  if (monthCardInput.value.length < 2) {
    month.textContent = "0" + monthCardInput.value;
  } else {
    month.textContent = monthCardInput.value;
  }
  if (+monthCardInput.value > 12 || +monthCardInput.value < 1) {
    monthCardInput.classList.add("border");
    errorMonth.classList.add("error-month");
    errorMonth.textContent = "invalid month";
  } else {
    monthCardInput.classList.remove("border");
    errorMonth.classList.remove("error-month");
    errorMonth.textContent = "";
    return true;
  }
}

yearCardInput.addEventListener("input", validateYearInput);

// function to check if year input field is valid

function validateYearInput() {
  if (!isValidInput(yearCardInput.value)) {
    yearCardInput.classList.add("border");
    year.textContent = "00";
    errorYear.textContent = "Wrong format, numbers only";
    errorYear.classList.add("error-year");
    return false;
  } else {
    yearCardInput.classList.remove("border");
  }
  if (yearCardInput.value.length < 2) {
    year.textContent = "0" + yearCardInput.value;
  } else {
    year.textContent = yearCardInput.value;
  }
  const currentYear = new Date().getFullYear().toString().slice(2);
  if (+yearCardInput.value > 100 || +yearCardInput.value < currentYear) {
    yearCardInput.classList.add("border");
    errorYear.classList.add("error-year");
    errorYear.textContent = "invalid year";
  } else {
    yearCardInput.classList.remove("border");
    errorYear.classList.remove("error-year");
    errorYear.textContent = "";
    return true;
  }
}

cvcInput.addEventListener("input", validatCvcInput);

// function to check if month input field is valid

function validatCvcInput() {
  if (!isValidInput(cvcInput.value)) {
    cvcInput.classList.add("border");
    cvc.textContent = cvcInput.value;
    errorCvc.textContent = "Wrong format, numbers only";
    errorCvc.classList.add("error-month");
    return false;
  } else {
    cvcInput.classList.remove("border");
  }
  if (cvcInput.value.length < 3) {
    errorCvc.textContent = "Must be 3 digits";
    cvcInput.classList.add("border");
    errorCvc.classList.add(".error-month");
  } else {
    cvc.textContent = cvcInput.value;
    cvcInput.classList.remove("border");
    errorCvc.classList.remove("error-month");
    errorCvc.textContent = "";
    return true;
  }
}

// function to check if input is only numbers

function isValidInput(input) {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

mainForm.addEventListener("submit", addCard);

function addCard(e) {
  e.preventDefault();

  if (userNameInput.value === "") {
    usernameBlankError.style.visibility = "visible";
    userNameInput.classList.add("border");
  } else {
    usernameBlankError.style.visibility = "hidden";
    userNameInput.classList.remove("border");
  }

  if (cardNumberInput.value === "") {
    errorMsgNumbers.textContent = "Can't be blank";
    errorMsgNumbers.classList.add("error-month");
    cardNumberInput.classList.add("border");
  } else {
    cardNumberInput.classList.remove("border");
  }

  if (monthCardInput.value === "") {
    errorMonth.textContent = "Can't be blank";
    errorMonth.classList.add("error-month");
    monthCardInput.classList.add("border");
  } else {
    monthCardInput.classList.remove("border");
  }
  if (yearCardInput.value === "") {
    errorYear.textContent = "Can't be blank";
    errorYear.classList.add("error-month");
    yearCardInput.classList.add("border");
  } else {
    yearCardInput.classList.remove("border");
  }
  if (cvcInput.value === "") {
    errorCvc.textContent = "Can't be blank";
    errorCvc.classList.add("error-month");
    cvcInput.classList.add("border");
  } else {
    cvcInput.classList.remove("border");
  }

  function checkEmptyInput() {
    const allInput = document.getElementsByTagName("input");
    for (let i = 0; i < allInput.length; i++) {
      if (allInput[i].value === "") {
        return false;
      }
    }
    return true;
  }
  if (
    checkEmptyInput() &&
    validateCardNumberInput() &&
    validateMonthInput() &&
    validateYearInput() &&
    validatCvcInput()
  ) {
    const allInput = document.getElementsByTagName("input");
    for (let i = 0; i < allInput.length; i++) {
      allInput[i].value = "";
    }

    mainForm.style.display = "none";
    completeDiv.style.display = "block";
  }
}

continueBtn.addEventListener("click", continueFunc);

function continueFunc() {
  mainForm.style.display = "block";
  completeDiv.style.display = "none";
}
