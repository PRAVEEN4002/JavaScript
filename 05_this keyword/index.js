//1. Behaviour of this keyword in a function

var a = "78";
function print() {
  console.log(a); // here, it prints the value of global variable value: if we have same variable inside the function then prints that value
}
print();
function print1() {
  var a = 90;
  console.log(a); //it prints function varaible
  console.log(this.a); //it prints gloabal variable
}
print1();
//2. behaviour of this keyword inside an object
var b = 100;
const object = {
  name: "Mi hypercharge",
  b: 54,
  price: 240768,
  a: this.b, //this keyword refers to the gloabl scope(here a=100)
  c: b,
};
console.log(object.a);
console.log(object.c);

//3.behaviour of this keyword inside method of an object
var c = 200;
const object2 = {
  name: "Mi 11",
  price: "23432",
  color: "color change",
  a: 45,
  b: 54,
  c: 43,

  print: function () {
    console.log("indie the method of an object with this keyword:" + this.c); //this keyword in a method of a function refers to the object itself
    console.log(object2.c);
    console.log("indise the method of an object with out this keyword: " + c);
  },
};
object2.print();

//4.behaviour of this keyword inside a class

var d = 400;
class restaurantManager {
  d = 57;
  name = "KFC";
  location = "balaji colony";

  print() {
    console.log(this.location);
    console.log(d); //this prints global variable
    console.log(this.d); //this prints class varaible
  }
}
var res1 = new restaurantManager();
res1.print();
