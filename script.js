let sent = document.querySelector('.sent');
let input = document.getElementById('input');
let output = document.querySelector('.output')
let countNumber=document.querySelector('.count');
let copy = document.querySelector('.copy')

let serialNumber = document.querySelector('.serial')
let repeat =document.querySelector('.repeat')




sent.addEventListener('click',()=>{
  
  if(true){

    if(serialNumber.checked){
  let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+= i + " " + input.value + ' '+' ';
  }
  output.innerHTML=`${text}`;
    } else  {
      let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+=  input.value + ' ';
  }
  output.innerHTML=`${text}`;
    } 


  }
  

 if (serialNumber.checked & repeat.checked){
    // output.innerHTML='hello'
    let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+= i + " " + input.value + ' ' +'<br>';
  }
  output.innerHTML=`${text}`;
  }
  else if (repeat.checked){
      let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+=  input.value + ' ' +'<br>';
  }
  output.innerHTML=`${text}`;
    }

  
   

  }
)

copy.addEventListener('click',()=>{
  if(output.innerHTML !== ''){
    navigator.clipboard.writeText(output.innerHTML);
    copy.innerText=`<i class="fa-solid fa-check" title="copied"></i>`
    setTimeout(()=>{
 copy.innerHTML= `<i class="fa-regular fa-clone"></i>`
},2000)
  }
})
