// TWO CATS - CLOSURE
var cats = [
	{
			name: 'Kitty',
			imgURL : '/img/kitten1.jpg',
			clickCounter: 0
		}
	,
	{
			name: 'Pussy',
			imgURL : '/img/kitten2.jpg',
			clickCounter : 0
		}
];

var noOfCats = cats.length;
var catContainer;

for (var i = 0; i < noOfCats; i++) {
	catContainer = $('#cat-container' + (i+1));
	catContainer.find('.cat-heading').text(cats[i].name);
	
	catContainer.click( (function(iCopy) {
		return function() {
			var nextCounter = cats[iCopy].clickCounter + 1
			cats[iCopy].clickCounter = nextCounter;
			$(this).find('.cat-counter').text('You have clicked me ' + nextCounter  + ' times.');
		}
	})(i));
}



