function displayNav() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}

function on() {
	document.getElementById("overlay").style.display = "block";
}
		
function off() {
	document.getElementById("overlay").style.display = "none";
}

window.addEventListener('resize', function(event) {
	if (window.innerWidth >= 700) {
		var x = document.getElementById("myLinks");
		x.style.display = "none";
	}
}, true);
