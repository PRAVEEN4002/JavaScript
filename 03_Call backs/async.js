async function ouput(){
    const just= await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await just.json()
    console.log(data);
}
ouput();