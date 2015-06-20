function loaded () {
	window.ondragstart = function(){return false;} 

	var button = document.getElementById("signupButton");
	var sendButton = document.getElementById("sendButton");
	var email = document.getElementById("email");
	var heading = document.getElementById("header");
	sendButton.style.visibility = "hidden";

	function send(){
		email.setAttribute("disabled", "yes");
		email.value = "k.";
		button.className = "done btn-sH";
		sendButton.style.visibility = "hidden";
	}

	button.onclick = function (event) {
		if (button.className !== "done") {
			button.className = "active btn-sH";
			sendButton.style.visibility = "visible";
			email.focus();
		}
	};

	sendButton.onclick = function(event){
		send();
	}

	email.onkeyup = function (event) {
		if (event.which === 13) {
			send();
		}
	}

	email.onblur = window.onblur = function (event) {
		if (email.value.trim().length === 0) {
			email.value = "";
			button.className = "btn-sH";
			sendButton.style.visibility = "hidden";
		}
	}

	/* Disabled this for now */
	// var id = ~~(Math.random() * 4);
	// $("#back").css({
	// 	backgroundImage: "url('img/backs/back" + id + ".jpg')"
	// });
}
