function togglenav() {
	document.querySelector("body > nav").classList.toggle("nav-show");
	return false;
}

function hidenav(e) {
	if (document.querySelector("body > nav").classList.contains("nav-show")) {
		document.querySelector("body > nav").classList.remove("nav-show");
		e.preventDefault();
	}
}

function compute() {
	if(window.innerHeight > window.innerWidth) {
		document.querySelector("body > header").addEventListener("click", togglenav);
	} else {
		document.querySelector("body > header").removeEventListener("click", togglenav);
	}
}

document.querySelector("body > nav").classList.add("nav-hide");
document.querySelector("body > main").addEventListener("click", hidenav);
document.querySelector("body > footer").addEventListener("click", hidenav);
window.addEventListener("resize", compute);
compute();
