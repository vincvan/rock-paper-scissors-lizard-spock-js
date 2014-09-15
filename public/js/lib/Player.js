function Player(name) {
  this.name = name;
  this.pick = null;
};

Player.prototype.picks = function(pick) {
  	this.pick = pick
};