function togglenav() {
	document.querySelector("body > header").classList.toggle("nav-show");
	return false;
}

function hidenav(e) {
	if (document.querySelector("body > header").classList.contains("nav-show")) {
		document.querySelector("body > header").classList.remove("nav-show");
		e.preventDefault();
	}
}

function compute() {
	if(window.innerHeight > window.innerWidth) {
		document.querySelector("body > header > h1").addEventListener("click", togglenav);
	} else {
		document.querySelector("body > header > h1").removeEventListener("click", togglenav);
	}
}

document.querySelector("body > header").classList.add("nav-hide");
document.querySelector("body > main").addEventListener("click", hidenav);
document.querySelector("body > footer").addEventListener("click", hidenav);
window.addEventListener("resize", compute);
compute();
