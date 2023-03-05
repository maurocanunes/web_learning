var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	var btnText = document.createTextNode("Detele Item");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(btnText);
	li.appendChild(btn);
	ul.appendChild(li);
	var itemId = ul.getElementsByTagName("li").length
	li.setAttribute("id", "item-" + itemId);
	btn.setAttribute("id", "btn-" + itemId);
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

ul.addEventListener("click", function(e) {
	txtId = e.target.id;
	if (txtId.includes("item")) {
		e.target.classList.toggle("done");
	} else if (txtId.includes("btn")) {
		var parentLi = e.target.parentNode
		parentLi.remove();
	}
})