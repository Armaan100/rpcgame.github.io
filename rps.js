//DISPLAYING VARIABLES
const compChoiceShow=document.getElementById('comp_choice');

const plyChoiceShow=document.getElementById('ply_choice');

const plyScoreShow=document.getElementById('ply_score');

const compScoreShow=document.getElementById('comp_score');

const resultShow=document.getElementById('result');





//INIT
var plyChoice=["ROCK","PAPER","SCISSOR"];
var compChoice=["ROCK", "PAPER", "SCISSOR"];


var score_comp=0
var score_ply=0


var player=plyChoice[0]
var computer=compChoice[0]






//EXTRACTING

const btn_rock = document.getElementById('rck_btn');
const btn_ppr = document.getElementById('ppr_btn');
const btn_scr = document.getElementById('scr_btn');






//COMPUTER DISPLAYING

function compchoiceisdisplayed(){
	random=Math.floor(Math.random()*3)
	if(random==0){
		compChoiceShow.innerHTML=compChoice[0]
		computer=compChoice[0]
		

	}
	else if(random==1){
		compChoiceShow.innerHTML=compChoice[1]
		computer=compChoice[1]
		
	}
	else if(random==2){
		compChoiceShow.innerHTML=compChoice[2]
		computer=compChoice[2]
		
	}

}








//INCREASING

function increment(){
	if(player==plyChoice[0] && computer==compChoice[0]){
		score_ply+=0;
		score_comp+=0;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[1] && computer==compChoice[1]){
		score_ply+=0;
		score_comp+=0;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[2] && computer==compChoice[2]){
		score_ply+=0;
		score_comp+=0;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[0] && computer==compChoice[1]){
		score_ply+=0;
		score_comp+=1;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[0] && computer==compChoice[2]){
		score_ply+=1;
		score_comp+=0;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[1] && computer==compChoice[0]){
		score_ply+=1;
		score_comp+=0;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[1] && computer==compChoice[2]){
		score_ply+=0;
		score_comp+=1;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[2] && computer==compChoice[0]){
		score_ply+=0;
		score_comp+=1;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} else if(player==plyChoice[2] && computer==compChoice[1]){
		score_ply+=1;
		score_comp+=0;
		plyScoreShow.innerHTML=score_ply
		compScoreShow.innerHTML=score_comp

	} 
}






//ALERT
function warning(){
	alert("REFRESH THIS PAGE TO PLAY THIS GAME AGAIN!!!")
}


//END OF GAME
function gameEnd(){
	if(score_comp==5){
		resultShow.innerHTML="COMPUTER WINS!"
		setTimeout(warning,1000)
	} else if(score_ply==5){
		resultShow.innerHTML="CONGRATS YOU WIN!"
		setTimeout(warning,1000)
	}
}








//MAIN
function pathor(){
	plyChoiceShow.innerHTML=plyChoice[0]
	player=plyChoice[0]
	compchoiceisdisplayed()
	increment()
	gameEnd()

	
} 

function kagoj(){
	plyChoiceShow.innerHTML=plyChoice[1]
	player=plyChoice[1]
	compchoiceisdisplayed()
	increment()
	gameEnd()

}

function kesi(){
	plyChoiceShow.innerHTML=plyChoice[2]
	player=plyChoice[2]
	compchoiceisdisplayed()
	increment()
	gameEnd()
}





rck_btn.addEventListener('click', pathor)
ppr_btn.addEventListener('click', kagoj)
scr_btn.addEventListener('click', kesi)






