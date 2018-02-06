document.getElementById("Open").addEventListener("click", function(){
	
	document.getElementById("menu").style.left = "0px";
	
});

document.getElementById("Close").addEventListener("click", function(){
	
	document.getElementById("menu").style.left = "-110px";
	
});

document.getElementById("makeBG").addEventListener("click", function(){
	
	document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
	document.getElementById("zoom").style.backgroundImage = "";
	
});

document.getElementById("Reset").addEventListener("click", function(){
	
	document.getElementById("bg").style.backgroundImage = "";
	
});

document.getElementById("showApp").addEventListener("click", function(){
	
	document.getElementById("app1").style.display = "block";
	
});

document.getElementById("hideApp").addEventListener("click", function(){
	
	document.getElementById("app1").style.display = "none";
	
});