var userName = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var form = document.querySelector("form");
var small = document.querySelectorAll("small");

function CheckInputs(input, element, event) {
  if (input == "" || input == "") {
    event.preventDefault();
    console.log("inputs can not be empty");
    element.innerHTML = "inputs can not be empty";
  }
}
form.addEventListener("submit", (e) => {
  CheckInputs(userName, small[0], e);
  CheckInputs(email, small[1], e);
  CheckInputs(password, small[2], e);
});
