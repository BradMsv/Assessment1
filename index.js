var ch1 = document.getElementById("ch1")
var ch2 = document.getElementById("ch2")
var ch3 = document.getElementById("ch3")

document.getElementById("BG1").addEventListener("click", function(){
	
	ch1.style.backgroundImage = "url(imgs/i1.jpg)";
	ch2.style.backgroundImage = "url(imgs/i2.jpg)";
	ch3.style.backgroundImage = "url(imgs/i3.jpg)";
	
});

document.getElementById("BG2").addEventListener("click", function(){
	
	ch1.style.backgroundImage = "url(imgs/i4.jpg)";
	ch2.style.backgroundImage = "url(imgs/i5.jpg)";
	ch3.style.backgroundImage = "url(imgs/i6.jpg)";
	
});


document.getElementById("BG3").addEventListener("click", function(){
	
	ch1.style.backgroundImage = "url(imgs/i7.jpg)";
	ch2.style.backgroundImage = "url(imgs/i8.jpg)";
	ch3.style.backgroundImage = "url(imgs/i9.jpg)";
	
});


document.getElementById("BG4").addEventListener("click", function(){
	
	ch1.style.backgroundImage = "url(imgs/i10.jpg)";
	ch2.style.backgroundImage = "url(imgs/i11.jpg)";
	ch3.style.backgroundImage = "url(imgs/i12.jpg)";
	
});

ch1.addEventListener("mouseover", function(){
	
	ch1.style.border = "5px solid black";
	document.getElementById("zoom").style.backgroundImage = ch1.style.backgroundImage;
	
});

ch1.addEventListener("mouseout", function(){
	
	ch1.style.border = "5px solid dodgerblue";
	
});

ch2.addEventListener("mouseover", function(){
	
	ch2.style.border = "5px solid black";
	document.getElementById("zoom").style.backgroundImage = ch2.style.backgroundImage;
	
});

ch2.addEventListener("mouseout", function(){
	
	ch2.style.border = "5px solid dodgerblue";
	
});

ch3.addEventListener("mouseover", function(){
	
	ch3.style.border = "5px solid black";
	document.getElementById("zoom").style.backgroundImage = ch3.style.backgroundImage;
	
});

ch3.addEventListener("mouseout", function(){
	
	ch3.style.border = "5px solid dodgerblue";
	
});

document.getElementById("zoom").addEventListener("click", function(){
	
	document.getElementById("zoomcontrols").style.display = "block";
	
});

document.getElementById("makeBG").addEventListener("click", function(){
	
	document.getElementById("zoomcontrols").style.display = "none";
	
});

var zoomW = 100;
var zoomH = 70;

document.getElementById("zoomIn").addEventListener("click", function(){
	
	zoomW = (zoomW + 10);
	zoomH = (zoomH + 7);
	
	document.getElementById("zoom").style.width = zoomW+"%";
	document.getElementById("zoom").style.height = zoomW+"%";
	
});

document.getElementById("zoomOut").addEventListener("click", function(){
	
	zoomW = zoomW - 10;
	zoomH = zoomH - 7;
	
	document.getElementById("zoom").style.width = zoomW+"%";
	document.getElementById("zoom").style.height = zoomW+"%";
	
});