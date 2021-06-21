const contactForm = document.getElementById("contact-form");

contactForm.setAttribute("novalidate","");

contactForm.addEventListener("submit", (event)=>
{
	hideAllErrors(contactForm);
	let firstName = contactForm.elements["firstName"];
	let lastName = contactForm.elements["lastName"];
	let phone = contactForm.elements["phone"];
	let email = contactForm.elements["email"];
	let comment = contactForm.elements["comment"];

	let success = document.getElementById("message-success");

	if(firstName.value.trim().length<2)
	{
		showError(firstName, event, "Name field must have at least 2 characters");
	}
	if(lastName.value.trim().length<2)
	{
		showError(lastName, event, "Name field must have at least 2 characters");
	}
	let phoneRegex = /^((000|112|106)|(((\+61 ?\(?0?)|(\(?0))[23478]\)?([- ]?[0-9]){8})|((13|18)([- ]?[0-9]){4}|(1300|1800|1900)([- ]?[0-9]){6}))$/;
	// Validate phone
	if (phone.value !== "" && !phoneRegex.test(phone.value)) {
		showError(phone, event, "Please enter a valid Australian number");
	}
	// Create regular expression (regex) pattern to match an email address
	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// Validate email
	if (email.value === "") {
		showError(email, event, "Email is required");
	}
	else if (!emailRegex.test(email.value.trim())) {
		showError(email, event, "Please enter a valid email address");
	}
	if (comment.value.trim().length < 20) {
		showError(comment, event, "Please enter 20+ characters");
	}
	else{

	}
});

function showError(element, event, errorMessage) {
	event.preventDefault();
	// Add the "error" class to the input element's parent
	element.parentNode.classList.add("error");
	let errorSpan = element.parentNode.querySelector(".error-message");
	if (!errorSpan) {
		errorSpan = document.createElement("span");
		errorSpan.classList.add("error-message");
		element.parentNode.appendChild(errorSpan);
	}
	errorSpan.innerHTML = errorMessage;
}

function hideAllErrors(form) {
	let errors = form.querySelectorAll(".error");

	// Loop through each element and remove the "error" class
	for (let i = 0; i < errors.length; i++) {
		errors[i].classList.remove("error");
	}
	// Different way of looping through the elements... using forEach() and arrow functions
	//errors.forEach((item) => {item.classList.remove("error")});
}
