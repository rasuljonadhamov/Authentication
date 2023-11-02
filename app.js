let btn = document.getElementById("btn");
let input = document.getElementById("input");
let list = document.getElementById("list");

btn.addEventListener("click", function () {
  if (input.value) {
    let item = document.createElement("li");
    item.innerHTML = input.value;
    list.appendChild(item);

    input.value = "";
  }
});
