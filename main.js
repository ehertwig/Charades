var animal = ["pig", "dog","bat","spider", "goat", "donkey", "dragon","bear", 'horse', 'lion', 'butterfly', 'bee', 'chicken', 'cat', 't-rex', 'bucking bronco', 'lizard', 'snail', 'porcupine', 'peacock', 'walrus', 'monkey', 'snake', 'rabbit', 'kangaroo', 'squirrel', 'turtle', 'camel', 'cow', 'giraffe', 'penguin', 'crocodile', 'frog', 'skunk', 'beaver', 'bull', 'deer', 'shark', 'crab', 'whale', 'elephant'];

var person = ['police', 'firefighter', 'mailman', 'chef', 'doctor', 'teacher', 'gymnast', 'basketball player', 'boxer', 'baseball player', 'pilot', 'dentist', 'gardener', 'swimmer', 'rock climber', 'runner', 'fisherman', 'babysitter', 'truck driver', "choir director", 'baby'];

var famousPeople = ['Will Ferrell', 'Mary Poppins', 'Charlie Chaplin', 'Vanna White', 'Richard Simmons', 'Big Bird', 'Paul Bunyan','John Travolta', 'Michael Jackson','Mr. Rogers', 'Scrooge','Michael Phelps','Billy Joel' ];

var phrases = ['Kill two birds with one stone.', "Keep your eyes peeled.",'Beating a dead horse.','Cut the Mustard',"Money doesn't grow on trees",'Birds of a feather, flock together.','Float like a butterfly, sting like a bee.','Winner winner, chicken dinner!',"Chick Flick","Happy as a Clam","Back-seat Driver",'Close, but no Cigar!',"Cold Turkey","Fly off the Handle","Hold your Horses!", 'Lame Duck','Smoke and Mirrors', 'Seven year Itch', 'Pipe dream',"Knock your socks off.", 'Son of a Gun', 'Hit the Sack','Make a long story short.',"Speak of the Devil.","Actions speak louder than words.","Show me the Money", "Under the weather.","Over the Moon","Bun in the Oven", "Cat got your Tongue?"];


function flip(){
  var x = Math.floor(Math.random() * 2);
    if (x < 1){
    document.getElementById('coin').innerHTML = "Heads win!";
  } else {
    document.getElementById('coin').innerHTML = "Tails win!";
  }
}



function randomAnimal() {
    var random = Math.floor(Math.random() * animal.length);
    document.getElementById('an').innerHTML = animal[random];
  }

function randomPerson() {
  var random = Math.floor(Math.random() * person.length);
  document.getElementById('psn').innerHTML = person[random];
}


function randomFamousPeople() {
  var random = Math.floor(Math.random() * famousPeople.length);
  document.getElementById('fp').innerHTML = famousPeople[random];
}

function randomPhrases() {
  var random = Math.floor(Math.random() * phrases.length);
  document.getElementById('ph').innerHTML = phrases[random];
}


var count = 0;
function minusOneL(){
 document.getElementById("changeL").innerHTML = --count;
}

function plusOneL(){
document.getElementById("changeL").innerHTML = ++count;
}


var count2 = 0;

function minusOneR(){
document.getElementById("changeR").innerHTML = --count2;
}

function plusOneR(){
 
document.getElementById("changeR").innerHTML = ++count2;
}


$.fn.timer = function( callback ) {
	callback = callback || function() {};
	return this.each(function() {
		var $timer = $( this ),
			$minutesEl = $timer.find( '.minutes' ),
			$secondsEl = $timer.find( '.seconds' ),
			interval = 1000,
			timer = null,
			start = 60,
			minutesText = $minutesEl.text(),
			minutes = ( minutesText[0] == '0' ) ? minutesText[1] : minutesText[0],
			m = Number( minutes );
			
			timer = setInterval(function() {
				start--;
				if( start == 0 ) {
					start = 60;
					
					$secondsEl.text( '00' );
					
					m--;
					
					if( m == 0 ) {
						clearInterval( timer );
						$minutesEl.text( '00' );
						callback();
						
					}
				} else {
				
					if( start >= 10 ) {
				
						$secondsEl.text( start.toString() );
				
					} else {
				
						$secondsEl.text( '0' + start.toString() );
					
				
					}
					if( minutes.length == 2 ) {
						$minutesEl.text( m.toString() );
					} else {
						if( m == 1 ) {
							$minutesEl.text( '00' );	
						} else {
							$minutesEl.text( '0' + m.toString() );
						}
					}
				
				}
			
			}, interval);
	
	});

};

$(function() {
	$( '.timer' ).timer(function() {
		document.getElementById( 'timer-beep' ).play();
	});

});
