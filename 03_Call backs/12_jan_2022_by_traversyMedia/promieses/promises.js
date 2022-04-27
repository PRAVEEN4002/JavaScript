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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post.body != undefined || post.title != undefined) {
        posts.push(post);
        resolve(`post has posted succesfully ${console.log(post.title == undefined)}`);
      } else {
        reject("faild to post");
      }
    }, 2000);
  });
}

CreatePost({ title: "post three", body: "this is the third post" })
  .then((success) => {
    console.log(success);
    GetPosts();
  })
  .catch((err) => {
    console.log(err);
  });

//promise.all

const promise1 = Promise.resolve("hello world");
const promise2 = 90;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Good Bye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
