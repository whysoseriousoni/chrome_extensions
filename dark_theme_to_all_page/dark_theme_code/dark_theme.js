// Code thanks to @polysoma : https://www.reddit.com/r/chrome/comments/e3txhi/comment/fem1cto/

var css = `
	position: fixed;
	pointer-events: none;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: white;
	mix-blend-mode: difference;
	z-index: 1;
`
var cover = null;

if (document.getElementById("custom-dark-theme")!==null){
	console.log("Removing existing dark theme");
	document.getElementById("custom-dark-theme").remove();
}
else{
	var cover = document.createElement("div");
	cover.setAttribute("style", css);
	cover.setAttribute("id", 'custom-dark-theme'); 
	document.body.appendChild(cover);
}

