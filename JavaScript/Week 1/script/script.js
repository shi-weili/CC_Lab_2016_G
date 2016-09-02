document.addEventListener("DOMContentLoaded", function () {

	console.log("Hey, I'm using JS!");
	var div1 = document.getElementById("div1");
	div1.style.backgroundColor = "red";

	var div2 = document.getElementById("div2");
	div2.style.backgroundColor = "yellow";

	var div3 = document.getElementById("div3");
	div3.style.backgroundColor = "#993355";

	var p = document.getElementsByClassName("parent");
	p[0].style.backgroundColor = "white";


	var degree = 0;
	var rotateDiv = function (){
		degree = degree + 0.1;
		p[0].style.transform = "rotate(" + degree + "deg)";
	};

	window.setInterval(rotateDiv, 10);


});