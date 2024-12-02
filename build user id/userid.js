let num=prompt("Enter how many number you make user id");
var userid=[];
let id;


for(let i=1;i<=num;i++)
{
        let fullname= prompt("Enter your full name with out using back-space for exam :- Nileshyadav");
        let size=fullname.length;
        userid[i]="@"+fullname+size;
        id=i;
        for(let i=1;i<id;i++)
        {
                if(userid[i]==userid[id])
                {
                        size=size+1;
                        userid[id]="@"+fullname+size;


                }
                
        }
        console.log("your user id is :-",userid[id]);

}