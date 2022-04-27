const form = document.getElementById("form");
const UserName = document.getElementById("UserName");
const Email = document.getElementById("Email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const bandi = UserName.value;
console.log(bandi);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const UserNamevalue = UserName.value;
  const Emailvalue = Email.value;
  const passwordvalue = password.value;
  const cpasswordvalue = cpassword.value;

  if (UserNamevalue == "") {
    setErrmsg(UserName, "Username can not be empty");
    console.log("errore");
  } else {
    setSucmsg(UserName, "");
  }
  if (Emailvalue == "") {
    setErrmsg(Email, "Email can not be empty");
  } else {
    setSucmsg(Email, "");
  }
  if (passwordvalue == "") {
    setErrmsg(password, "password can not be empty");
  } else {
    setSucmsg(password, "");
  }
  if (cpasswordvalue == "") {
    setErrmsg(cpassword, "password can not be empty");
  } else {
    if (passwordvalue != cpasswordvalue) {
      setErrmsg(cpassword, "Password mimsmatch ");
    } else {
      setSucmsg(cpassword, "");
    }
  }
}

function setErrmsg(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSucmsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}
