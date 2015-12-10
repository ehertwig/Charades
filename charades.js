var animal = ["pig", "dog", "bear", 'horse', 'lion', 'butterfly', 'bee', 'chicken', 'cat', 't-rex', 'bucking bronco', 'porcupine', 'peacock', 'walrus', 'monkey', 'snake', 'rabbit', 'kangaroo', 'squirrel', 'turtle', 'camel', 'cow', 'giraffe', 'penguin', 'alligator', 'frog', 'skunk', 'beaver', 'bull', 'deer', 'shark', 'crab', 'whale', 'elephant'];

var person = ['police', 'firefighter', 'mailman', 'chef', 'doctor', 'teacher', 'gymnast', 'basketball player', 'boxer', 'baseball player', 'pilot', 'dentist', 'gardener', 'swimmer', 'rock climber', 'runner', 'fisherman', 'babysitter', 'truck driver', 'choir director', 'baby'];
var famousPeople = ['Will Ferrell', 'Mary Poppins', 'Charlie Chaplin', 'Vanna White', 'Richard Simmons', 'Big Bird', 'Paul Bunyan'];

function randomAnimal() {
  console.log("this works"); 
  var random = Math.floor(Math.random() * animal.length);
  document.getElementById('id').innerHTML = animal[random];
  
}
