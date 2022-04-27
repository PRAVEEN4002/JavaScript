//using async functions to fetch data
var FetchedData;
async function getApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await response.json();
  FetchedData = data;
  var p = document.createElement("ul");
  let output;
  data.forEach((item, index) => {
    output += `<li>${item.name}</li>`;
  });
  p.innerHTML = output;
  document.body.append(p);
  console.log(data);
}
getApiData();
setTimeout(() => {
  console.log(FetchedData);
}, 2000);
// while (FetchedData == undefined) {
//   if (FetchedData !== undefined) {
//     console.log(FetchedData);
//   }
// }
