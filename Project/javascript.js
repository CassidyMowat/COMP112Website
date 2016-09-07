//cmowat javascript.js COMP112 project


//code found on google developers to run map, edited to fit my purpose
window.onload = function initialize() {
	var css = true;
	/*if(document.getElementById("width").style.width != '900px'){
		css = false;
	}*/ //trying to stop the map from loading if styles were disabled by cheking the style on an element
	if(css == true){
		var myLatlng = new google.maps.LatLng(-45.866997, 170.518438);
		var map_canvas = document.getElementById('map_canvas');
		var map_options = {
          	center: new google.maps.LatLng(-45.866997, 170.518438),
          	zoom: 16,
         	 mapTypeId: google.maps.MapTypeId.ROADMAP
        	}
        	var map = new google.maps.Map(map_canvas, map_options)
			// placing the marker on the map
			var marker = new google.maps.Marker({
      			position: myLatlng,
      			map: map,
      			title: '133 Union St E'
  		});
	}
}

//Javascript for form validation
function validate(){
	var isValid = true;
	
	var fname = document.getElementById('fname');
	var fname_error = document.getElementById('fname_error');
	
	var sname = document.getElementById('sname');
	var sname_error = document.getElementById('sname_error');
	
	var sender = document.getElementById('sender');
	var sender_error = document.getElementById('sender_error');
	
	var phone = document.getElementById('phone');
	var phone_error = document.getElementById('phone_error');
	
	var email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
	var phone_num = /^[0-9 -]+$/;
	
	var other = document.getElementById('other');
	var other_error = document.getElementById('other_error');
	var other_comments = document.getElementById('other_comments');
	
	fname_error.innerHTML = "";
	sname_error.innerHTML = "";
	sender_error.innerHTML = "";
	phone_error.innerHTML = "";
	other_error.innerHTML = "";
	
	if(fname.value == "" || fname.value == " "){
		isValid = false;
		fname_error.innerHTML = "You must include a first name.";
	}
		
	if(sname.value == "" || sname.value == " "){
		isValid = false;
		sname_error.innerHTML = "You must include a surname.";
	}
	
	if(!sender.value.match(email)){
		isValid = false;
		sender_error.innerHTML = "Please provide a valid email address";
	}
	
	if(!phone.value.match(phone_num)){
		isValid = false;
		phone_error.innerHTML = "Please provide a valid phone number";
	}
	
	if(other.checked == true && other_comments.value == "" || other_comments.value == " " ){
		isValid = false;
		other_error.innerHTML = "Please state why you picked 'other'";
	}

	return isValid;
}

