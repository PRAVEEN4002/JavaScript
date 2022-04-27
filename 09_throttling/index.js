let i = 0;
function Expensive() {
  console.log("button clicked", +i++);
}
const bettterExpensive = throttle(Expensive, 500);
function throttle(fn, d) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
}

(function () {
  var a = "Hello Alexa";
  return a;
})();
