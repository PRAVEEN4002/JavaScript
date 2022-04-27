
// step1(10,function(result1,error){
//     if(!error)
//     {
//         step2(result1,function(result2,error){
//            if(!error)
//            {
//                step3(resutl2,function(resutl3,error){
//                    if(!error){
//                        console.log(resutl3);
//                    }
//                })
//            }  
//         })
//     }
// })


// function step1(value, callback){
//     callback(value+10,false);
// }
// function step2(value, callback){
//     callback(value+10,false);
// }
// function step3(value, callback){
//     callback(value+10,false);
// }

//second time revision

step1=(value,callback)=>{
    
    callback(value+10,false);
};
step2=(value,callback)=>{
    
    callback(value+10,false)
}
step3=()=>{
    
    callback(value+10,false);
}


step1(10,(result,error)=>{

    if(!error){
        step2(result,(result1,error)=>{
            if(!error){
                step3(result1,(result2,error)=>{
                    if(!error){
                        console.log(result2);
                    }
                })
            }
        })
    }
})