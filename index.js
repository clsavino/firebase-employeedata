// Initialize Firebase
var config = {
    apiKey: "AIzaSyAD8VU9IBiN0Y1rLOzFqcec-JxIn4Idzak",
    authDomain: "employee-data-management-958aa.firebaseapp.com",
    databaseURL: "https://employee-data-management-958aa.firebaseio.com",
    storageBucket: "employee-data-management-958aa.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database()

// Initial Values
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";


// Capture Button Click
$("#submitBtn").on("click", function(event) {

	// Grabbed values from text boxes
	event.preventDefault();

	name = $('#employee-name').val().trim();
	role = $('#role').val().trim();
	startDate = $('#start-date').val().trim();
	monthlyRate = $('#monthly-rate').val().trim();


	// Code for handling the push
	database.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	})

});

//Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function(childSnapshot) {

	// Log everything that's coming out of snapshot
	console.log(snapshot.val());
	

	// Change the HTML to reflect
	$("#employee-info").html(childSnapshot.val().name);
	$("#employee-info").html(childSnapshot.val().role);
	$("#employee-info").html(childSnapshot.val().startDate);
	$("#employee-info").html(childSnapshot.val().monthlyRate);


// Handle the errors
}, function(errorObject){

	console.log("Errors handled: " + errorObject.code)
})

