const divs = document.querySelectorAll("div");

// divs.forEach((Element) => {
//   Element.addEventListener("click", () => {
//     console.log("Hi");
//   });
// });
// document.addEventListener("click", (e) => {
//   if (e.target.matches("div")) {
//     console.log("Hi");
//   }
// });
addGlobalEventListner("click", "div", (e) => {
  console.log("hi");
});
function addGlobalEventListner(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
const newDiv = document.createElement("div");
newDiv.style.width = "400px";
newDiv.style.height = "400px";
newDiv.style.backgroundColor = "green";
document.body.append(newDiv);
