const posts = [
  {
    title: "post one",
    body: "body of the post one",
  },
  {
    title: "post two",
    body: "body of the post two",
  },
];

function GetPosts() {
  let output = "";
  setTimeout(() => {
    posts.forEach((item) => {
      output += `<li>${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
GetPosts();

function CreatePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post.title != undefined || post.body != undefined) {
        posts.push(post);
        resolve("");
      } else {
        reject("failed to post");
      }
    }, 2000);
  });
}
CreatePost({ title: "post three", body: "body of the post three" })
  .then((resolve) => {
    console.log(resolve);
    GetPosts();
  })
  .catch((reject) => {
    console.log(reject);
  });

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (4 < 5) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  }, 1000);
});
promise1
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((rejected) => {
    console.log(rejected);
  });
