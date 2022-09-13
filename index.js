const num1=Math.floor(Math.random()*10)+1;
const num2=Math.floor(Math.random()*10)+1;

const headerEL=document.getElementById("question");
headerEL.innerText=`What is ${num1} multiply ${num2} is?`;
const inputEL=document.getElementById("input");
const formEL=document.getElementById("form");
const correctAns=num1*num2;
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
const scoreEL=document.getElementById("score");
scoreEL.innerText=`Score:${score}`;
formEL.addEventListener("submit",()=>{
    const userAns=+inputEL.value
    if(userAns===correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
})
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}



