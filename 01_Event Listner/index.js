const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("grand parent");
  },
  { capture: false, once: true } // when use only one, it will get excuted only once
);
parent.addEventListener(
  "click",
  (e) => {
    console.log("parent");
  },
  { capture: false }
);
child.addEventListener("click", printHi, { capture: false });
function printHi(e) {
  console.log("Hi");
  e.stopPropagation(); //stops the propagation
}
setTimeout(() => {
  child.removeEventListener("click", printHi);
}, 2000);
