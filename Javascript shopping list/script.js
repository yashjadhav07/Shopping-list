var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");


function inputLength() {
	return input.value.length;
}

function setGradient(){
  body.style.background="Linear-gradient(to right, "+ color1.value +","+ color2.value +")";

}

function createListElement() {
	var checkbox = document.createElement('input');

            // Assigning the attributes
            // to created checkbox
            checkbox.type = "checkbox";
            checkbox.name = input.value;

            checkbox.id = "check";


						var label = document.createElement('label');

            // assigning attributes for
            // the created label tag
            label.htmlFor = "id";
						label.appendChild(document.createTextNode(input.value))
						var br = document.createElement("br");
						label.appendChild(br);
	// checkbox.appendChild(document.createTextNode(input.value));
	ul.appendChild(checkbox);
	ul.appendChild(label);

	// ul.appendChild(br);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)
