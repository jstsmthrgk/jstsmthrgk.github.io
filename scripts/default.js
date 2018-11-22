function togglenav() {
	document.querySelector("body > header > nav").classList.toggle("show");
}

function compute() {
	if(window.innerHeight > window.innerWidth) {
		document.querySelector("body > header > h1").addEventListener("click", togglenav);
	} else {
		document.querySelector("body > header > h1").removeEventListener("click", togglenav);
	}
}

document.querySelector("body > header > nav").classList.add("hide");
window.addEventListener("resize", compute);
compute();
