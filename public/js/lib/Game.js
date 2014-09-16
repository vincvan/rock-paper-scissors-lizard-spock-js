
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
	var array = this.PAIRS[this.player1.pick]['beats']

	if (this._isSamePick()) {
		return null;
	}
    else if (array.indexOf(this.player2.pick) > -1){
		return this.player1;
	}
	else {
		return this.player2;
	};
};

Game.prototype.PAIRS = {
    rock:     { beats: ['scissors','lizard'] },
    paper:    { beats: ['rock', 'spock'] },
    scissors: { beats: ['paper','lizard'] },
    spock:    { beats: ['rock', 'scissors'] },
    lizard:   { beats: ['spock', 'paper'] }
  };

Game.prototype.FIGHTING_STYLE = {
  	rock: { lizard: "crushed", scissors: "crushed" },
  	paper: { spock: "disproved", rock: "covered"},
  	spock: { rock: "vapourised", scissors: "smashed" },
  	lizard: { spock: "poisoned", paper: "ate"},
  	scissors: { paper: "cut", lizard: "decapitated" }
  };

Game.prototype.victoryMessage = function() {
	if (this._isSamePick()) {
		return "It's a draw"
	}
	else if(this.winner() === this.player1) {
		return this.formatMessage(this.player1,this.player2)
	}
	else {
		return this.formatMessage(this.player2,this.player1)
	};	
};

Game.prototype.fightingStyle = function(winningPick,losingPick) {
	return this.FIGHTING_STYLE[winningPick][losingPick]
};

Game.prototype.formatMessage = function(winner,loser) {
	return winner.name + "'s " + winner.pick + " " + this.fightingStyle(winner.pick,loser.pick) +  " "  + loser.name + "'s " + loser.pick 
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};
