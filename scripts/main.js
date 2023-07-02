const myImage = document.querySelector("img");

//toggles images used as logo
myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");

	if(mySrc === "images/logo.png") {
		myImage.setAttribute("src", "images/logo2.png");
	} else {
		myImage.setAttribute("src", "images/logo.png");
	}
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//sets username
function setUserName() {
	const userName = prompt("You are visiting this site for the first time. Please Enter your name:");

	if(!userName) {
		setUserName();
	} else {
		localStorage.setItem("name", userName);
		myHeading.textContent = `Welcome to Mozilla ${userName}`;
	}
}


//checks if local storage has an entity called name
if(!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Welcome to Mozilla ${storedName}`;
}

//calls a function on button
myButton.onclick = () => {
	setUserName();
};

