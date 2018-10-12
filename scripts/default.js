function togglenav() {
	if(document.querySelector("body > nav").style.display == "block") {
		document.querySelector("body > nav").style.setProperty("display", "none", "important");
	} else {
		document.querySelector("body > nav").style.setProperty("display", "block", "important");
	}
}

function compute() {
	if(window.innerHeight > window.innerWidth) {
		document.querySelector("body > nav").style.setProperty("display", "none", "important");
		document.querySelector("body > header").addEventListener("click", togglenav);
	} else {
		document.querySelector("body > nav").style.setProperty("display", "block", "important");
		document.querySelector("body > header").removeEventListener("click", togglenav);
	}
}

window.addEventListener("resize", compute);
document.addEventListener("load", compute);
