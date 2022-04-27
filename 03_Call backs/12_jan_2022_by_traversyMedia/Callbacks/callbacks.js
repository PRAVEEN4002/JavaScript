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

function CreatePost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
CreatePost({ title: "post three", body: "this is post three" }, GetPosts);

var values = ["post1", "post2", "post3"];
function GetSome() {
  setTimeout(() => {
    console.log("value fetched from server", values);
  }, 1000);
}

function CreatePost(fun1) {
  setTimeout(() => {
    values.push("post4");
    fun1();
  }, 1000);
}
CreatePost(GetSome);
