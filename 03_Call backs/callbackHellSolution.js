
step1(10,function(resutl1,error){
    if(!error){
        return resutl1;
    }
})

function step1(value,callback){
  let resutl1= callback(value+10,false);
  step2(resutl1,function(result2,error){
      if(!error){
        return result2;
      }
  })

}
function step2(value,callback){
   let result2=callback(value+10,false);
   step3(result2,function(result3,error){
       if(!error){
           console.log(result3);
       }
   })
}
function step3(value,callback){
    callback(value+10,false);
}
