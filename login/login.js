$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
     Parse.initialize("lp0hmpsZthUm04pKu0qSUVYmcWsc5SlUSLuUkCZi", "Fp937Q4JUa1Gx0NLVtpM6IdLWBR3hf6wj4OboYkm");
	//Parse.initialize("ZTh4lArJFksTGuMLZ6sAaSyx1KOzCo3lL1QhwER7", "X2lqnhHPNKM5pkNKxZaWQlbZSMWItYxD7eT4Tleg");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	 testObject.save({foo: "bar2"}).then(function(object) {
	  alert("Please, LOGIN.");
	}); 
	
	$('.form-2').on('submit', function(e) {
 
	    e.preventDefault();
 
	    var data = $(this).serializeArray(),
	        username = data[0].value, //click
	        password = data[1].value; //WNM617
 
	    Parse.User.logIn(username, password, {
	        success: function(user) {

				alert("Welcome to Create, & Create!");
				sessionStorage.username=username;
				location.href ="index2.html";
				},	  
				  

			error: function(object, error) {
				    console.log("sorry, this does not match our records.");
				  }
		 			
		
				 
	          
	    });

	   
		
		
		 
	});
	
	
 
});












