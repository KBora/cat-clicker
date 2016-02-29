var cats = [
	{
		id : 'cat1',
		name: 'Kitty',
		imgURL : '/img/kitten1.jpg',
		clickCounter: 0
	}	,
	{
		id : 'cat2',
		name: 'Peanut',
		imgURL : '/img/kitten2.jpg',
		clickCounter : 0
	},
	{
		id : 'cat3',
		name: 'Tiger and Lilly',
		imgURL : '/img/kitten3.jpg',
		clickCounter : 0
	},
	{
		id : 'cat4',
		name: 'Bennie',
		imgURL : '/img/kitten4.jpg',
		clickCounter : 0
	},
	{
		id : 'cat5',
		name: 'Rasputin',
		imgURL : '/img/kitten5.jpg',
		clickCounter : 0
	}
];


var Cats = {
	hideAllCats : function() {
		$('.cat-container').hide();
	}
};

var noOfCats = cats.length;
var catContainerHTML;
var $catContainers = $('#cat-containers');
var $catSelectorContainer = $('#cat-selector-container');

for (var i = 0; i < noOfCats; i++) {

	// create container elements - using the 'append' syntax 
	// also adding click event that increments cat counter -  messy
	catContainerHTML = $('<div id="' + cats[i].id + '" class="cat-container">')
							.append('<div class="cat-heading">' +  cats[i].name + '</div>')
							.append( $('<div class="cat-image"></div>')
								.append('<img src=".' +  cats[i].imgURL +'" alt="' + cats[i].name + '">')
								.click( (function(iCopy) {
									return function() {
										var nextCounter = cats[iCopy].clickCounter + 1
										cats[iCopy].clickCounter = nextCounter;
										$(this.parentElement).find('.cat-counter').text('You have clicked me ' + nextCounter  + ' times.');
									}	
								})(i))
								 )
							.append('<div class="cat-counter"></div>');
	$catContainers.append(catContainerHTML);

	// create selector elements
	$( '<div/>', {
		'class': 'cat-selector',
		text: cats[i].name,
		// add onclick event will display selected cat details in the container area
		click: (function(iCopy) {			
			return function() {
				Cats.hideAllCats();
				$('#' + cats[iCopy].id).show();
			}
		})(i)
	})
	.appendTo($catSelectorContainer);

	
	


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



