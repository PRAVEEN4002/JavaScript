function GetData() {
  var value = document.getElementById("input").value;
  console.log(value);
}

const doSomeMagic = (fn, d) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply();
    }, d);
  };
};

const betterFunction = doSomeMagic(GetData, 300);
