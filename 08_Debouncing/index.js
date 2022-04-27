function GetData(e) {
  let value = document.getElementById("input").value;
  console.log("Fetching Data: " + value);
}

const DoSomeMagic = function (fn, d) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};
const betterFunction = DoSomeMagic(GetData, 300);
