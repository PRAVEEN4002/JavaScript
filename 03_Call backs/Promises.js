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

function CreatePost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('sometning went wrong');
            }
        },3000)
    })
 
}
CreatePost({title:"Post Thre",body:"this is post there"}).then(Getposts).catch(err=>console.log(err));

Getposts();

const promise1=Promise.resolve("Hellow World");
const promise2=34;
const promise3=new Promise((resolve)=>
setTimeout(()=>{resolve("bandi")},2000))
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
const promise5=new Promise((resolve)=>{
    setTimeout(()=>{resolve("bandi praveen")},1000);
})

Promise.all([promise1,promise2,promise3,promise4,promise5]).then(values=>console.log(values));