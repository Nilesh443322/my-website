let level=0;
let robot=[];
let user=[];
let gamestart="False";
let h2=document.querySelector("h2");
let box=document.querySelectorAll(".box");
let body=document.querySelector("body");
let score=document.querySelector(".score");
let i=0;
let j=0;
flag=0;
let hgs;

//.....................................................................................................................................
let highscore=()=>{
    hgs=localStorage.getItem("hgs");
    if(hgs){
        score.innerText=`Highscore:${hgs}`;
    }
    else{
        hgs=0;
    }

}
let updatehighscore=()=>{
    localStorage.setItem("hgs",hgs);
    score.innerText=`Highscore:${hgs}`;
}










let computer=()=>{
     let array=["red","greenyellow","blue","pink"];  
     robot[i]=array[(Math.floor(Math.random()*4))];
     console.log(robot);
     butflash(robot[i]);
     i++;
}
//................................................................................................................................................

let butflash=(btn)=>{
    let button=document.querySelector(`.${btn}`)
    //....................................................................................console.log(button)
    // button.classList.add("flash");
    button.style.backgroundColor="white";
    setTimeout(function (){
        // button.classList.remove("flash");
        button.style.backgroundColor=`${btn}`;
        //.................................................................................console.log("flash");
        //.................................................................................console.log(button)
    },900);

}
//...............................................................................................................................
let levelup=()=>{
   
    level++
    h2.innerText=`Level ${level}`;
    if(hgs<level){
        hgs=level;
        updatehighscore();

    }
}



//................................................................................................................................



//...................................................................................................................................
highscore();
document.addEventListener("keypress",()=>{//.................................................that are used to start the game
   if(gamestart=="False"){
    // h2.innerText=`game was starting`;
    
    levelup();
    gamestart="True";
    computer();
    box.forEach(element => {//.........................................................that are used access the user data
        element.addEventListener("click",()=>{
            user[j]=element.id;
            j++  
            
            console.log(`user=${user}`);
            console.log(`robot=${robot}`);
            butflash(element.id);


            game=1;


            for(k=0;k<user.length;k++)//......................that are used to check value are same are not
                {
                    if(robot[k]!=user[k])//...........................................that are used to game over 
                    {
                        body.style.backgroundColor="red";
                        setTimeout(()=>{
                            body.style.backgroundColor="white";
                        },300)
                        h2.innerText=`game over !! you score is ${level} and if you restart the game press any key of keyboard`;
                        h2.style.color="red";
                        // element.remove();
                        
//.....................................................................................................................................
                        document.addEventListener("keypress",()=>{//..................................that are used  to restart the game
                            level=0;
                           
                            user=[];
                            // gamestart="False";
                            
                            j=0;
                            levelup();
                            if(game==1){   //......................................that are used because they call multiple time then the fixed only one time to get the value of robot
                                setTimeout(()=>{
                                    i=0;
                                    robot=[];
                                    computer();
    
                                },1000);
                                console.log("game start");
                                game=game+1;
                                flag=0;
                            }
                            })

                        flag=1;
                        break;
                    }
    
                }
            if(robot.length==user.length)//........................that logic are used to win level up when bhot are equal then exicuted
            {
                
                if(flag==0)//......................................that are the check the robot abd user are same
                    {
                        console.log("hello");
                        levelup();
                        setTimeout(()=>{
                            computer();

                        },1200)
                        
                        user=[];
                        j=0;
                    }
            }
        })       
    });  
    //....................................................................................................................................................
    
   }
})
