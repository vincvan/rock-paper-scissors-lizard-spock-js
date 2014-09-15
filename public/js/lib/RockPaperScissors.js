var player1;
var player2;
var game;
var OPTIONS = ["rock","paper","scissors","lizard","spock"]
var random_pick = 
player1 = new Player('Ben');
player2 = new Player('Vincent');
game = new Game(player1, player2);



$(document).ready(function(){
	$('#images img').on('click', function() {
		player1.picks(OPTIONS[Math.floor(Math.random()*OPTIONS.length)]);
		$('#victoryMessage h1').remove();
		var pick = $(this).data('pick');
		player2.picks(pick)
	  	var $victoryMessage = $("<h1>" + game.victoryMessage() + "</h1>")
	  	$victoryMessage.appendTo("#victoryMessage")	
	})

});




