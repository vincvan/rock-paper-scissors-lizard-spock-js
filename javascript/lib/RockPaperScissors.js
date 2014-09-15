function Player(name) {
  this.name = name;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}


Player.prototype.picks = function(pick) {
  // body...
};

Game.prototype.winner = function() {
    return this.player1;
};