let user =0;
let robot=0;
let winningpoint=prompt("fixed the winning point of the is :");

let body=document.querySelector("body");// that are used to access the body with that help to create div in end
let img=document.querySelector(".img");// that are used to access the body with that help to create div in end


let chooseimg=document.querySelectorAll(".gameimg");//that are used to access the all game img those click 
let start=document.querySelector(".start");//that are use to msg access because that can change for example text bgc margin
let myscore=document.querySelector("#myscore");//that are access the score to update that
let computerscore=document.querySelector("#computer_score");
//draw function
const draw=(id)=>{
    
    start.innerText=`match was draw! both are selected  ${id}`; 
    start.style.fontSize="1.75rem";//.................................................................skip or optional
    start.style.backgroundColor="rgb(37, 36, 48)";//...................................................skip or optional
    start.style.border="4px solid rgb(235, 134, 134)";//...................................................skip or optional
   
      
 
    // console.log();
    
}
// winner or looser
const winner=(me,id,computer)=>{
    // console.log(me);
    // add.innerText="congrate ! ..you are winner";//....................................
    
    if(me)
    {
        start.innerText=`you are win! your ${id} beats computer ${computer} `;
        start.style.fontSize="1.5rem";//.................................................................skip or optional
        start.style.backgroundColor="green";//...........................................................skip or option
        start.style.border="4px solid black";//...................................................skip or optional
        user=user+1;
        myscore.innerText=`${user}`;
        //................................................................add the new
        
        if(user==winningpoint)//  .....................
        {
            let add=document.createElement("div")//...that are use to create div
            img.remove();//  that are remove the image        .
            add.style.backgroundColor="green"
            add.innerText="congrate ! ..you are winner";//               .
            add.style.marginLeft="40rem";//                                                     .
            add.style.fontSize="1.75rem";//                                                          .
            add.style.marginTop="4rem";//                                                              .
                                             //                                                          . ...skip ....important   the line are add new div with js file that are css part to desingn that inner part is congrate you are winner the are related to line no 51
            add.style.color="whitesmoke";//                                                            .
            add.style.padding="10px";//                                                             .
            add.style.borderRadius="20px";//                                                      .
            add.style.display="inline-flex";
            add.style.border="4px solid black";//.............................................
            body.append(add);                                                              
        }  

            

    }
    else{
        start.innerText=`you are lose the game!  computer ${computer} beats your ${id}`;
        start.style.fontSize="1.35rem"//..................................................................skip or optional
        start.style.backgroundColor="red";//...............................................................skip or optional
        start.style.border="4px solid black";//...................................................skip or optional
        robot++;
        computerscore.innerText=`${robot}`;
        if(robot==winningpoint)//.................................
        {
            let add=document.createElement("div")//...that are use to create div
            img.remove();//  that are remove the image        .
            add.style.backgroundColor="red";
            add.innerText="sorry ! ..you are lose the game";//               .
            add.style.marginLeft="40rem";//                                                     .
            add.style.fontSize="1.75rem";//                                                          .
            add.style.marginTop="4rem";//                                                              .
                                             //                                                          . ...skip ....important   the line are add new div with js file that are css part to desingn that inner part is congrate you are winner the are related to line no 51
            add.style.color="whitesmoke";//                                                            .
            add.style.padding="10px";//                                                             .
            add.style.borderRadius="20px";//                                                      .
            add.style.display="inline-flex";
            add.style.border="4px solid black";//...............................................
            body.append(add);
        }

    }

        
}
//computer are selected the auto matic for this function
const computerchoose=()=>{
   let arr=["rock","paper","scissor"];
   computerselect=arr[Math.floor(Math.random()*3)];                 // random function are selected 0.1-0.9 number and floor are remove after decimal number *3 they help to select 0,1,2
//    console.log(computerselect);
   return computerselect;
}
// this function are to store user choose
const userchoose=chooseimg.forEach(element => {
    element.addEventListener("click",()=>{
        // console.log(`you are selected`);
        start.style.marginLeft="36rem";                  //that are the fix position of massage..............................skip or optional
        const id=element.getAttribute("id");            //user selected img are store
        // console.log(`you are selected ${id}`);
        const computer=computerchoose();               //computer selected image are store
        //after that line the compare the values
        let me;
        if(id==computer)
        {
            draw(id);
        }
        else{
            if(id=="scissor")
            {
                
                me=(computer==="rock")?false:true;
                // console.log(me);
                
            }
            else if(id=="rock")
            {
                me=computer=="paper"?false:true;
                // console.log(me);

            }
            else{
                me=computer=="scissor"?false:true;
                // console.log(me);
            }
            winner(me,id,computer);
                
             }
        
        

    })}
)
// let add=document.createElement("div")
// if(user==winningpoint)
// {

//     img.remove();
//     add.innerHTML="<congrate ! ..you are winner";
//     add.style.marginLeft="40rem";
//     add.style.fontSize="1.75rem";
//     add.style.marginTop="4rem";
//     add.style.backgroundColor="green";
//     add.style.color="whitesmoke";
//     add.style.padding="10px";
//     add.style.borderRadius="20px";
//     add.style.display="inline-flex";
//     body.append(add);

// }


