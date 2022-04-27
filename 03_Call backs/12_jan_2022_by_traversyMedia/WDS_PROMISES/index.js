// let p = new Promise((resolve, reject) => {
//   var a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });
// p.then((message) => {
//   console.log(`it is in  THEN block ${message}`);
// }).catch((message) => {
//   console.log("it is in CATCH", +message);
// });

// const posts = [
//   { title: "post one", body: "this is post two" },
//   { title: "post two", body: "this is post two" },
// ];

// const CreatePost = (post) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error:something went wrong");
//       }
//     }, 1000);
//   });
// };
// const GetPost = () => {
//   let output = "";
//   setTimeout(() => {
//     posts.forEach((item) => {
//       output += `<li>${item.title}</li>`;
//       document.body.innerHTML = output;
//     });
//   }, 2000);
// };

// CreatePost({ title: "post three", body: "this is post three" })
//   .then(() => {
//     GetPost();
//   })
//   .catch((error) => console.log(error));

const promise1 = Promise.resolve("Hello Wrold");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "Good bye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
