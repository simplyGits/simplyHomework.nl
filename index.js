var headings = [
	"Hogere cijfers. Makkelijker.",
	"Educatie met meer swag.",
	"All-in-one schoolhulpmiddel.",
	"Super hip.",
	"Betere resultaten. Gratis."
];

function loaded () {
	var button = document.getElementById("signupButton");
	var sendButton = document.getElementById("sendButton");
	var email = document.getElementById("email");
	var heading = document.getElementsByTagName("h1")[0];
	sendButton.style.visibility = "hidden";

	function send(){
		email.setAttribute("disabled", "yes");
		email.value = "k.";
		button.className = "done";
		sendButton.style.visibility = "hidden";
	}

	button.onclick = function (event) {
		if (button.className !== "done") {
			button.className = "active";
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
			button.className = "";
			sendButton.style.visibility = "hidden";
		}
	}

	function changeHeading(){

	}

	var current;
	heading.innerHTML = current = headings[~~(Math.random() * headings.length)];
}
