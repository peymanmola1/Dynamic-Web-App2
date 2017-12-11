// initialize Firebase
var config =
{
    apiKey: "AIzaSyC_UD_oIz8ff0azfw5sDHA19_BR4PTeTQk",
    databaseURL: "https://decentralization-4ea3c.firebaseio.com"
};
firebase.initializeApp(config);

var database = firebase.database();
var peopleDatabase = database.ref('people');
var peopleList = [];

peopleDatabase.on('child_added', function( firebaseObject )
{
	var person = firebaseObject.val();
  	peopleList.push(person);
  	// "push" is JavaScript's lingo for "add to a list"
})

console.log(peopleList);