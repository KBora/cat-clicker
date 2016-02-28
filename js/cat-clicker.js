// ONE CAT
// var catCounter = 0;

// jQuery version
// $('#cat-container').click(function(e) {
//   catCounter += 1;
//   $('#cat-counter').text('You have clicked me ' + catCounter  + ' times.');
// });

// Vanilla javascript
// var elem = document.getElementById('cat-container');
// var catCounter = 0;

// elem.addEventListener('click', function(){
// 	catCounter += 1;
// 	document.getElementById('cat-counter').innerHTML = 'You have clicked me ' + catCounter + ' times';	  	
// }, false);




// TWO CATS - NO CLOSURE
// var cats = {
// 	 cat1 : {
// 			name: 'Kitty',
// 			imgURL : '/img/kitten1.jpg',
// 			clickCounter: 0
// 		}
// 	,
// 	cat2 : {
// 			name: 'Pussy',
// 			imgURL : '/img/kitten2.jpg',
// 			clickCounter : 0
// 		}
// };

// var noOfCats = cats.length;
// var catContainer;

// for (var key in cats) {
//   if (cats.hasOwnProperty(key)) {
//   	catContainer = $('#' + key);
//   	catContainer.find('.cat-heading').text(cats[key].name);

//   	catContainer.click(function(e) {
// 			var catId = this.id;
// 			var nextCounter = cats[catId].clickCounter + 1
// 			cats[catId].clickCounter = nextCounter;
// 			$(this).find('.cat-counter').text('You have clicked me ' + nextCounter  + ' times.');
// 		});

//   }
// }

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



