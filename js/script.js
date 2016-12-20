function Play(){ 
	var answer = parseInt(Math.random()*100);
	var playerNum = 1;
	while(true){
		var userAnswer = parseInt(prompt("Ходит игрок " + playerNum +  " Угадайте число от 0 до 100. Чтобы выйти, наберите -1"));
		if(userAnswer==answer){
		alert("Поздравляю, вы угадали");
		break;
		} else if (userAnswer==-1){
		break; 
		} else if(userAnswer<answer){
		alert("Ваше число меньше");
		} else if (userAnswer>answer){
		alert("Ваше число больше");
		} else {
		alert("Вы ввели не число, хитрец");
		}
	
		if(playerNum==1)
		playerNum = 2;
		else if(playerNum==2)
		playerNum = 1;
	}
}

function Play1(){
	var answer = parseInt(Math.random()*100);
	while(true){
		//for(var tryCount = 0; tryCount<5; tryCount++){
		var userAnswer = parseInt(prompt("Угадайте число от 0 до 100. Чтобы выйти, наберите -1"));
		if(userAnswer==answer){
		alert("Поздравляю, вы угадали");
		break;
		} else if (userAnswer==-1){
		break; 
		} else if(userAnswer<answer){
		alert("Ваше число меньше");
		} else if (userAnswer>answer){
		alert("Ваше число больше");
		} else {
		alert("Вы ввели не число, хитрец");
		}
	}	
}