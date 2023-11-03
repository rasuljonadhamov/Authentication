const nameInput = document.getElementById("username");
const nameUser = document.getElementById("nameUser");
const language = document.getElementById("language");
const ageUser = document.getElementById("age");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const message = document.querySelector(".error-message1");

// localStorage.clear();

const userArray = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (passwordInput.value.length <= 6) {
    message.innerText = "Password must be at least 8 character";
  } else if (passwordInput.value.length >= 14) {
    message.innerText = "Password must be between 8 and 13 character";
  } else {
    userArray.push(passwordInput.value);
    userArray.push(nameInput.value);
    // userArray.push(nameUser.value);
    userArray.push(ageUser.value);
    userArray.push(language.value);
    localStorage.setItem("user", JSON.stringify(userArray));
    passwordInput.value = "";
    nameInput.value = "";
    ageUser.value = "";
    language.value = "";
    console.log(userArray);
  }

  if (nameInput.value) {
    passwordInput.value = "";
    nameInput.value = "";
  }
});
