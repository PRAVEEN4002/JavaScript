parent = document.querySelector(".parent");
childone = document.querySelector(".child");
childTwo = childone.nextElmentSibling;
ChangeColor(childone);

function ChangeColor(ColorChange) {
  ColorChange.style.backgroundColor = "green";
}
