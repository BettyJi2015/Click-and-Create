$(function() {
	//important set up for import Parse
	Parse.$ = jQuery;
	Parse.initialize("lp0hmpsZthUm04pKu0qSUVYmcWsc5SlUSLuUkCZi", "Fp937Q4JUa1Gx0NLVtpM6IdLWBR3hf6wj4OboYkm");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();

	testObject.save(
	{
		foo:"bar"
	}).then(function(Object) {
		alert("Welcome to Create, & Create!");
	}
	);
	
});