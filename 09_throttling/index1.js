let i = 0;
const GetData = () => {
  console.log("Fetching Data", +i);
  i++;
};

const Throttiling = (fn, d) => {
  let flag = true;
  return function () {
    if (flag == true) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};

const bettterExpensive = Throttiling(GetData, 500);
