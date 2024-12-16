export function handleInvalid(e){
    let event = e.target
    if(event.value.length<0 || event.value.length===0 ){
      event.setCustomValidity("please enter id ")
    }
    else if(event.value.length<5){
      event.setCustomValidity(`enter more than ${event.value.length} or equal to 10` )
    }
    else if(event.value.length>10){
      event.setCustomValidity("set id with in 10 characters")
    }
    else{
     event.setCustomValidity("")
    }
   }