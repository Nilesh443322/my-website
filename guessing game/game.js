let input=document.querySelector("input");
let btn=document.querySelector("#btn1");
let output=document.querySelector("#ran")
let div=document.querySelector("#label")
let quit=document.querySelector("#quit");
let hading=document.querySelector("#hading")
let startdiv=document.querySelector("#new");

let number;
// function start(){
//   console.log("start");
// }
btn.addEventListener("click",function start(){
  number=input.value;//that are the to fixed the range they are take a input by user
  btn.remove();
  input.value="";
  let button=document.createElement("button");
  button.innerText="done";
  div.append(button);
  //..................................................................................................................................
  



















    // let number=prompt("enter the  range of guese number");
let gamenuumber=Math.floor(Math.random() * number +1);//random() are select 0.01 ...... 0.99 numbers and number multiple means range is 0 to number-1 and floor() are the help remove decimal and select lowest number 
console.log("hint the number is ",gamenuumber);
// let gamenuumbe=gamenuumber;
// let num=1.2;
// let numb=1.2;



//.........................................................................................start button.
// let startbtn=document.createElement("button");
//   startbtn.innerText="start";
//   startbtn.id="startbutton";







//..........................................................................................start button.
quit.addEventListener("click",()=>{
  output.innerText=`game over !! correct number is ${gamenuumber} `
  input.remove();
  button.remove();
  hading.style.backgroundColor="red";
  hading.style.color="white";
  output.style.color="red";
  quit.remove();
  // startdiv.append(startbtn);

})



output.innerText=`guese a number b/w 0-${number}`//+(gamenuumbe+(gamenuumbe/num).onfixed
button.addEventListener("click",()=>{
  let usernumber=input.value;
  console.log(usernumber);




  




  if(gamenuumber==usernumber )
    {
      output.innerText=`congrates ${usernumber} is your right guese `
      input.remove();
      button.remove();
      hading.style.backgroundColor="green";
      hading.style.color="white";
      output.style.color="green";
      quit.remove();
      // startdiv.append(startbtn);

        
    }
  
  else if(usernumber<gamenuumber)
    {
      output.innerText=`your number is too small`
      input.value="";
      output.style.color="red"
    }
  else                                                                                                       //....if(usernumber>gamenuumber)
    {
      output.innerText=`your number is too large`
      input.value="";
      output.style.color="red"
    }
  












// while(true)
// {
//     let usernumber= prompt("guese a number b/w 0-"+(gamenuumbe+(gamenuumbe/num)).toFixed(0));

//     
//     // ....else
//     // ....  {
//     // ....    // (gamenuumbe-(gamenuumbe/num)).toFixed(0) this is define limiteof game
//     // ....    alert("sorry this number is wrong\n hint plese guese b/w " + (gamenuumbe-(gamenuumbe/num)).toFixed(0)+ "-" + (gamenuumbe+(gamenuumbe/numb)).toFixed(0)+"\n\n enter the quit to exit the game");
//     // .....    // they are give hint  the near the number :-num=num+0.35&0.52
//     // ....    num=num+0.35;
//     // ....    numb=numb+0.52;
//     //....   }

    
// }
  //...................................................................startbutton
  // startbtn.addEventListener("click",()=>{
  //   start();
    

  // })

  })
  




















})






























