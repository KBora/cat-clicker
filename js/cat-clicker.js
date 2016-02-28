var cats = [
	{
		name: 'Kitty',
		imgURL : '/img/kitten1.jpg',
		clickCounter: 0
	}	,
	{
		name: 'Peanut',
		imgURL : '/img/kitten2.jpg',
		clickCounter : 0
	},
	{
		name: 'Tiger and Lilly',
		imgURL : '/img/kitten3.jpg',
		clickCounter : 0
	},
	{
		name: 'Bennie',
		imgURL : '/img/kitten4.jpg',
		clickCounter : 0
	},
	{
		name: 'Rasputin',
		imgURL : '/img/kitten5.jpg',
		clickCounter : 0
	}
];

var noOfCats = cats.length;
var catContainer;

var catSelectorHTML;

var $catSelectorContainer = $('#cat-selector-container');

for (var i = 0; i < noOfCats; i++) {
	// create elements for selectors based on cat array
	$( "<div/>", {
		"class": "cat-selector",
		text: cats[i].name,
		click: function() {
			$( this ).toggleClass( "test" );
		}	
	})
	.appendTo( $catSelectorContainer );

	// add onclick event to these elements that will display the cat details in the container area
	

	// keep the onclick event on the image of the car to increment counter


	// catSelector 

	// catContainer = $('#cat-container' + (i+1));
	// catContainer.find('.cat-heading').text(cats[i].name);
	
	// catContainer.click( (function(iCopy) {
	// 	return function() {
	// 		var nextCounter = cats[iCopy].clickCounter + 1
	// 		cats[iCopy].clickCounter = nextCounter;
	// 		$(this).find('.cat-counter').text('You have clicked me ' + nextCounter  + ' times.');
	// 	}
	// })(i));
}



