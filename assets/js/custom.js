/* Validate page */

function validate() {
	/* Variables used in validation */
	var em = document.myForm.user;
	var emError = document.getElementById('user-error');
	var pw = document.myForm.password;
	var pwError = document.getElementById('pwd-error');
	/* Check the user field should not be blank */
	if(em.value == "") {
		em.classList.add("in-error");
		emError.innerHTML = "Please enter your username";
		return false;
	} else if(em.value != "test") {
		em.classList.add("in-error");
		emError.innerHTML = "Please enter a valid username";
		return false;
	} 
	else {
		em.classList.remove("in-error");
		emError.innerHTML = "";
	}
	/* Check the password field should not be blank */
	if( pw.value == ""){
		pw.classList.add("in-error");
		pwError.innerHTML = "Please enter your password";
		return false;
	}
	/* Check the password field should contain "test" */		
	else if(pw.value != "test") {
		pw.classList.add("in-error");
		pwError.innerHTML = "Please enter a valid password";
		return false;
	}
	else {
		pw.classList.remove("in-error");
		pwError.innerHTML = "";
	};
	window.location.href = "list.html"
	return false;
}


window.onload = function() { 

	/* Print data form API on list page */
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.omdbapi.com/?apikey=d8ecb486&s=red";

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			myFunction(myArr.Search);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(arr) {
		var getValue = "";
		for(var i = 0; i < arr.length; i++) {
			getValue += '<article class="movie ' + (arr[i].Year > 2000 ? "":"mob_hide") + '">' +
						'<figure class="poster"><img src="' + arr[i].Poster + '" alt="' + arr[i].Title + '" /></figure>' +
						'<h2>' + arr[i].Title + '</h2>' +
						'<p class="movie_yrs">' + arr[i].Year + '</p>' +
					'</article>';
		}
		var el = document.getElementsByClassName('row');
		if(el.length > 0) {
			el[0].innerHTML = getValue;
		}
	}

	/* Thank you message */
	var thanks = document.getElementsByClassName('thank-you');
	if(thanks.length > 0) {
		setTimeout(function(){
			thanks[0].classList.add('active');
		}, 3000);
	}
}


