const nameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("event");
});
