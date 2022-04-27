const posts=[
    {title:"Post one",body:"this is the post one"},
    {title:"post two",body:"this is the post two"}       
]

function Getposts(){
    let output=''
    setTimeout(()=>{
        posts.map((item)=>{
            output+=`<li>${item.title}</li>`
           })
           document.getElementById('ol').innerHTML=output;
    },2000)
    

}
Getposts();

function CreatePost(post,Callback)
{
  setTimeout(()=>{
      posts.push(post);
      Callback();
  },3000)
}
CreatePost({title:"Post Thre",body:"this is post there"},Getposts);

Getposts();


