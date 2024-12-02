
let mode="white";
let btn=document.querySelector("#but");//that are access the button
let body =document.querySelector("body");//that the access the body to change bg color
let bordr=document.querySelectorAll(".bord");//that are the access the frame to border color
let nme=document.querySelector("#m");//that are access the name of ownsite to change the font color
btn.addEventListener("click",()=>{
    console.log("mode cahnge");
    btn.style.fontSize="1rem";
    if(mode=="white")// black mode
    {
        body.style.backgroundColor="black";
        btn.style.backgroundColor="white";//that line is change the button bg color
        btn.style.color="black";//thet line is change  button font color
        btn.innerText="white mode";
        mode="black";
    }
    else if(mode=="black")    //white mode
        {       
            body.style.backgroundColor="white";
            btn.style.backgroundColor="pink";//that line is change the button bg color
            btn.style.color="blue";//thet line is change  button font color
            btn.innerText="pink mode";
            mode="pink";
            nme.style.color="black"//they are change the ownsite color in black
            for(i=0 ; i<=bordr.length;i++)// they are the changeborder color
                {
                    bordr[i].style.border="4px solid black";
                }
        
        }
    else if(mode=="pink")    //white mode
        {
            body.style.backgroundColor="pink";
            btn.style.backgroundColor="#1a1818";//that line is change the button bg color
            btn.style.color="white";//thet line is change  button font color
            btn.innerText="gray mode";
            mode="gray";   
        }
    else if(mode=="gray")    //white mode
        {
            body.style.backgroundColor="#1a1818";
            btn.style.backgroundColor="rgb(191, 236, 253)";//that line is change the button bg color
            btn.style.color="black";//thet line is change  button font color
            btn.innerText="blue mode";
            mode="blue"; 
            nme.style.color="whitesmoke";//they are change the ownsite color in white color
            for(i=0 ; i<=bordr.length;i++)// they are the changeborder color
                {
                    bordr[i].style.border="4px solid whitesmoke";
                }  
        }
    else if(mode=="blue")    //white mode
        {
            body.style.backgroundColor="blue";
            btn.style.backgroundColor="black";//that line is change the button bg color
            btn.style.color="white";//thet line is change  button font color
            btn.innerText="black mode";
            mode="white";   
        }
   


})
//...........................................................new feature
//.......................................................................................search button
let input=document.querySelector("input");
let button=document.querySelector(".fb");
let video=document.querySelectorAll(".bord");
let div=document.querySelectorAll(".frame")

button.addEventListener("click",()=>{//......................that are use to click the search button
    let i=0;
    let j=0;
    let flag=0;//................................................that are used because element wale loop me har bar remove ho ja raha tha append vala frame then we used codion because they are only one time remove frame

    let userinput=input.value.toLowerCase();//.....................tolowercase are used because both you can search both upper or lower case but they convert lower case and you can easly search
    video.forEach(element=>{//......................that are used to check every title name are equal to user name 
        let videoname=element.title.toLowerCase();
        if(videoname.indexOf(userinput)>=0)//........when userinput are present in title than the show their index value than they are grater than and equaal 0 then they enter in the condition
        {
           console.log(videoname)
           if(flag==0)//.................that are because they used to one 1 time remove all element
            {
            for(rem of video){
                rem.remove()
                flag=1;
              }

           }


           
           div[i].append(element);
           if(j%3==2){
            i++;
           }
           j++;
           
        }
        


    })
    // console.log(userinput);
    // console.dir(video.title);

   if(flag==0){
    alert("not found the video");
   }

  }
)



