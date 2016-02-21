'use strict'

var secretRandomNum;
var numGuess;
var gameOver;

function newGame(){
	numGuess = 0;
	gameOver = 0;
	return Math.floor(Math.random()*100);
}

function guess(currentGuess){
	if(gameOver == 0){
		var newGuessLi = '<li>'+currentGuess+'</li>';
		$("#guessList").append(newGuessLi);
		numGuess = numGuess+1;
		$("#count").text(numGuess);
		if(currentGuess == secretRandomNum){
			gameOver = 1;
			$("#feedback").text("You win!");
		}
		else if(Math.abs(currentGuess-secretRandomNum)<=5){
			$("#feedback").text("Very hot");
		}
		else if(Math.abs(currentGuess-secretRandomNum)<=10){
			$("#feedback").text("Hot");
		}
		else if(Math.abs(currentGuess-secretRandomNum)<=15){
			$("#feedback").text("Kinda hot");
		}
		else if(Math.abs(currentGuess-secretRandomNum)<=25){
			$("#feedback").text("Warm");
		}
		else {
			$("#feedback").text("Cold");
		}
	}	
}

$(document).ready(function(){
	
	secretRandomNum = newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
  		secretRandomNum = newGame();
  		$("#guesslist li").remove();
  		$("#feedback").text("Starting new game... ");
  	});

  	$('form').submit(function(event){
  		event.preventDefault();
  		guess($('#userGuess').val());
  		$('#userGuess').val('')
  	});
});


