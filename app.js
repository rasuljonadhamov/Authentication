const nameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const message = document.querySelector(".error-message1");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (passwordInput.value.length <= 6) {
    message.innerText = "Password must be at least 8 character";
  } else {
    passwordInput.value = "";
    nameInput.value = "";
  }

  if (passwordInput.value.length >= 14) {
    message.innerText = "Password must be between 8 and 13 character";
  } else {
    passwordInput.value = "";
    nameInput.value = "";
  }

  if (nameInput.value) {
    passwordInput.value = "";
    nameInput.value = "";
  }
});
