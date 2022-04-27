let posts = [
  { title: "post one", body: "this  is post one" },
  { title: "post two", body: "this is the post two" },
];

function GetPosts() {
  let output = "";
  setTimeout(() => {
    posts.forEach((item, index) => {
      output += `<li>${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function CreatePost(post) {
  setTimeout(() => {
    if (post.title != undefined && post.body != undefined) {
      // resolve("post posted successfully");
      posts.push(post);
    }
  }, 2000);
}

async function init() {
  await CreatePost({ title: "post three", body: "this is the post three" });
  GetPosts();
}
init();

// async function myFunc() {
//   return "Hello World";
// }

// myFunc().then((res) => {
//   console.log(res);
// });
