const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const completed = document.querySelector(".thankyou");
const form = document.querySelector("form");

function formatCardNumber(event) {
  cardNumber.innerText = format(event.target.value);
}

function formatCardName(event) {
  cardName.innerText = format(event.target.value);
}

function formatCardMonth(event) {
  cardMonth.innerText = format(event.target.value);
}

function formatCardYear(event) {
  cardYear.innerText = format(event.target.value);
}

function formatCardCvc(event) {
  cardCvc.innerText = format(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }

  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else if (numberInp.value.length < 16) {
    numberInp.classList.add("error");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }

  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }

  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }

  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  }