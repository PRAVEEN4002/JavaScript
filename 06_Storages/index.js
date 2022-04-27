localStorage.setItem("x", "854");
localStorage.removeItem("x");
var x = localStorage.getItem("x");
var y = -sessionStorage.setItem("y", "478");
console.log(sessionStorage.getItem("y"));
console.log(x);
document.cookie = "x:87;expires:" + new Date(2022, 0, 30);
console.log(document.cookie).toUTCString();
