var StudentsData = [
  {
    name: "tony",
    id: "3353",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "kenlin",
    id: "393",
    role: "React developer",
    company: "techforce",
    address: "bangalore",
    salary: 39000,
  },
  {
    name: "raheman",
    id: "8763",
    role: "node js developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "rahul",
    id: "ED12443",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "praveen",
    id: "7779",
    role: "MERN developer",
    company: "edureka",
    address: "Newzealand",
    salary: 500000,
  },
  {
    name: "shaik",
    id: "08032",
    role: "",
    company: "shailtechforce",
    address: "shailconlony",
    salary: 98088,
  },
  {
    name: "tony",
    id: "3353",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "tony",
    id: "3353",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "tony",
    id: "3353",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "tony",
    id: "3353",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
  {
    name: "tony",
    id: "3353",
    role: "junior software developer",
    company: "edureka",
    address: "bangalore",
    salary: 45000,
  },
];

////starting from new
var element = '<div class="box1"></div>';
var maindiv = document.createElement("div");
maindiv.className = "flex";
elmenent = '<div class="box1"></div>';

for (var i = 0; i < 10; i++) {
  maindiv.innerHTML = maindiv.innerHTML + elmenent;
}
document.body.appendChild(maindiv);
var box1 = document.getElementsByClassName("box1");

var tableContent = [];
StudentsData.map((item) => {
  var res = `<table class="table1"  border><tr><td>name</td><td>${item.name}</td>
  </tr><tr><td>EmployeeId</td><td>${item.id}</td>
  </tr><tr><td>role</td><td>${item.role}</td>
  </tr><tr><td>company</td><td>${item.company}</td></tr>
  <tr><td>adress</td><td>${item.address}</td></tr>
  <tr><td>salary</td><td>${item.salary}</td></tr></table>`;
  tableContent.push(res);
});
// box1[0].innerHTML = tableContent[0];
for (var i = 0; i < box1.length; i++) {
  box1[i].innerHTML = tableContent[i];
}
var a = document.createElement("div");
a.innerHTML = "<h1>bandi praveen</h1>";
document.body.append(a);
// a.remove();
a.className = "headings d-none";
a.className = "headings";
