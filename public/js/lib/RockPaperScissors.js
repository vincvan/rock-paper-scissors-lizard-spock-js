var player1;
var player2;
var game;
var OPTIONS = ["rock","paper","scissors","lizard","spock"]
var random_pick = 
player1 = new Player('Computer');
player2 = new Player('');
game = new Game(player1, player2);



$(document).ready(function(){
	$("#nameInput").keydown(function(){
		if (event.keyCode == 13)  {
			event.preventDefault();
	        var name = $( this ).val();
	        player2.name = name
	        var $message = $("<h3> Go " + player2.name + " !!!</h3>")
	        $message.prependTo("#welcomeMessage")
	        $("#nameForm").hide();
        }

	});
	$('#images img').on('click', function() {
		if (player2.name === '') {
			$('#flashMessage').remove()
			$("<h5 id='flashMessage'>Please type in your name first!</h5>").appendTo('#nameForm')
		}
		else {
		player1.picks(OPTIONS[Math.floor(Math.random()*OPTIONS.length)]);
		var pick = $(this).data('pick');
		player2.picks(pick)
	  	var $victoryMessage = $("<li>" + game.victoryMessage() + "</li>")
	  	$victoryMessage.prependTo("#victoryMessage")
	  	if (game.winner() === player2){
	  		$("#victoryMessage li:first-child").css('color', 'green');
	  		$("#victoryMessage li:first-child").animate({'font-size': '120%'});
	  	}
	  	else {
	  	$("#victoryMessage li:first-child").css('color', 'rgba(255, 10, 4,0.6)');
	  	$("#victoryMessage li").eq(1).css({'color':'rgba(255,255,255,0.6)', 'font-size': '100%'})
	  	$("#victoryMessage li").eq(5).fadeOut(1000, function(){
	  		$this.remove()
	  	});
	  };
	}
	});

});




