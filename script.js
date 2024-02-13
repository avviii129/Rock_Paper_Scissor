let out,n,score=+0;
random();


function rock() {
output();

        document.getElementById("uout").style.backgroundImage = "url('src/r.png')";
        document.getElementById("uout").style.backgroundRepeat = "no-repeat";
        document.getElementById("uout").style.backgroundSize = "100px";

        if(out == "paper"){
            document.getElementById("info").
            innerHTML = "Mine's paper... You Lose";
            document.getElementById("info").style.color="#e1102a";
            if(score>0){
            score=score-1;}
            
        }
        if(out == "rock"){
            document.getElementById("info").innerHTML= "Mine's rock too... let's play again";
            document.getElementById("info").style.color="rgb(32, 136, 255)";
        }
        if(out == "Scissors"){
            document.getElementById("info").innerHTML= "Mine's Scissors... You Win";
            document.getElementById("info").style.color="#00b853";
            score=score+1;

        }

        document.getElementById("score").innerHTML = score;
        random();
    }

function paper(){
output();

        document.getElementById("uout").style.backgroundImage = "url('src/p.png')";
        document.getElementById("uout").style.backgroundRepeat = "no-repeat";
        document.getElementById("uout").style.backgroundSize = "100px";

        if(out == "paper"){
        
            document.getElementById("info").innerHTML= "Mine's paper too... let's play again";
            document.getElementById("info").style.color="rgb(32, 136, 255)";
        }
        if(out == "rock"){
            document.getElementById("info").innerHTML= "Mine's rock... You Win";
            document.getElementById("info").style.color="#00b853";
            score=score+1;
        }
        if(out == "Scissors"){
            document.getElementById("info").innerHTML= "Mine's Scissor... You Lose";
            document.getElementById("info").style.color="#e1102a";
            if(score>0){
            score=score-1;}
        }
        
        document.getElementById("score").innerHTML = score;
        random();
    }

function Scissors(){
output();

        document.getElementById("uout").style.backgroundImage = "url('src/s.png')";
        document.getElementById("uout").style.backgroundRepeat = "no-repeat";
        document.getElementById("uout").style.backgroundSize = "100px";

    if(out == "paper"){
            document.getElementById("info").innerHTML= "Mine's paper... You Win";
            document.getElementById("info").style.color="#00b853";
            score=score+1;
        }
        if(out == "rock"){
            document.getElementById("info").innerHTML= "Mine's rock... You Lose";
            document.getElementById("info").style.color="#e1102a";
            if(score>0){
            score=score-1;}
        }
        if(out == "Scissors"){
            document.getElementById("info").innerHTML= "Mine's Scissor too... let's play again";
            document.getElementById("info").style.color="rgb(32, 136, 255)";
        }
        
        document.getElementById("score").innerHTML = score;
        random();
    }



// computer
function random(){
n = Math.floor(Math.random()*3 + 1);
    if (n==1){
        out = "paper";
    }
    if (n==2){
        out = "rock";
    }
    if (n==3){
        out = "Scissors";
    }
console.log(out);
}



function output(){
    if (n==1){
        document.getElementById("cmpout").style.backgroundImage = "url('src/pc.png')";
        document.getElementById("cmpout").style.backgroundRepeat = "no-repeat";
        document.getElementById("cmpout").style.backgroundSize = "100px";
    }
    if (n==2){
        document.getElementById("cmpout").style.backgroundImage = "url('src/rc.png')";
        document.getElementById("cmpout").style.backgroundRepeat = "no-repeat";
        document.getElementById("cmpout").style.backgroundSize = "100px";
    }
    if (n==3){
        document.getElementById("cmpout").style.backgroundImage = "url('src/sc.png')";
        document.getElementById("cmpout").style.backgroundRepeat = "no-repeat";
        document.getElementById("cmpout").style.backgroundSize = "100px";  
    }
}