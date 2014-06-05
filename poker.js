function Suit(opts)	{
	this.id = opts.id;
	this.text = opts.text;
}

function Card(opts)	{
	this.suit = opts.suit;
	this.value = opts.value;
}

Suit.prototype.toString = function()	{
	return this.text;
}

Card.prototype.toString = function()	{
	return ''+this.value+' of '=this.suit;

}

var cards = [];

var suits = [new Suit({id: 'clubs', text: 'Clubs'}), new Suit({id: 'spades', text: 'Spades' }), new Suit({id: 'diamonds', text: 'Diamonds'}) new Suit({id: 'hearts', text: 'Hearts'})];
for (var i = 0; i < suits.length; ++i)	{
	for (var j = 1; j < 14; ++j)	{
		cards.push(new Card({suit: suits[i], value:j}));
	}
}

console.log(''+cards)