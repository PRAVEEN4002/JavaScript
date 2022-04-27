const userName=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('pwd');
const cpassword=document.getElementById('pwd1');
const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});


function checkInputs(){

    const userNameValue=userName.value;
    const emailvalue=email.value;
    const passwordvalue=password.value;
    const cpasswordvalue=cpassword.value;

    if(userNameValue==''){
        setErrmsg(userName,'username can not be empty');
    }else{
        setSuccessmsg(userName);
    }
    if(emailvalue==''){
        setErrmsg(email,'Email can not be empty');
    }else{
        setSuccessmsg(email);
    }
    if(passwordvalue==''){
        setErrmsg(password,'password can not be empty');
    }else{
        setSuccessmsg(password);
    }
    if(cpasswordvalue==''){
        setErrmsg(cpassword,'password can not be empty');
        if(cpasswordvalue!=password){
            setErrmsg(cpassword,'password mismatch');
        }
    }else{
        setSuccessmsg(cpassword);
    }
}


function setSuccessmsg(input){

    const formControl=input.parentElement;
    formControl.className='form-control success';
    const small=formControl.querySelector('small');
    small.innerText=''
}

function setErrmsg(input,message){
    
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}