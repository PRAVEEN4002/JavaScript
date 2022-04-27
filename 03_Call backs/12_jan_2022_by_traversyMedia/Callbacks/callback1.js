let posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

CreatePost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

GetPosts = () => {
  let output = "";
  setTimeout(() => {
    posts.forEach((item) => {
      output += `<li>${item.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

CreatePost({ title: "post three", body: "this is post three" }, GetPosts);
// GetPosts();
