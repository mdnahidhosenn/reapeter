let input1=document.querySelector('.input1')
let input2=document.querySelector('.input2')
let input3=document.querySelector('.input3')
let click =document.querySelector('.click');
let year=document.querySelector('.year');
let month=document.querySelector('.month');
let day=document.querySelector('.day')


// let dat =new Date()

// console.log(dat.getMonth());

click.addEventListener('click',()=>{






  let inputYear=parseInt(input1.value);
  let inputMont=parseInt(input2.value)
  let inputDay=parseInt(input3.value);

  // let inputYear=parseInt(2006);
  // let inputMont=parseInt(6)
  // let inputDay=parseInt(24);
 

  
  let date = new Date()
  let presentMonth=date.getMonth();
  let presentYear= date.getFullYear();
  let presentDay = date.getDate()

if(inputYear >= presentYear){
 alert('Please enter lower year from present year')
}

if(inputMont>12){
  alert('Please enter the real month')
}
if(inputDay>31){
  alert('Please enter real date')
}



  let rsYear='';
  let rsMonth='';
  let rsDay='';

 if(inputYear < presentYear){
 

 


  // rsYear+=parseInt(rsYear)
 
  // rsYear+= Math.abs(inputYear - presentYear)
  if(inputMont > presentMonth){
    rsYear+=Math.abs( presentYear - inputYear )-1
    rsMonth+=(presentMonth+12)-inputMont;
  }else{
    // if((inputYear-presentYear)<= 0){
    //   rsYear+= 0
    // }
    rsYear+= presentYear - inputYear;
    rsMonth+=presentMonth - inputMont;
  }

  if(inputDay > presentDay){
    rsMonth+=-1
    rsDay+=(presentDay + 30)-inputDay;
  }else{
    rsDay+= presentDay - inputDay;
  }
 }

 // lower


 let resultYear=parseInt(rsYear);
year.innerHTML=`Year : ${resultYear}`
console.log(resultYear);

let resultMonth=parseInt(rsMonth)
month.innerText= `Month : ${resultMonth}`
console.log(resultMonth);

let resultDay=parseInt(rsDay)
day.innerHTML=`Day : ${resultDay}`
console.log(resultDay);



// event listener
})




