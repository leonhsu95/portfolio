function sendMessage(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let comment= document.getElementById("comment").value.trim();
    
	let success = document.getElementById("success");
    let successMessage = document.createElement("p");
    successMessage.setAttribute("class", "message-success");
    

if (firstName && lastName && phone && email && comment) {
    
        //     let formData = JSON.stringify({
        //         firstName,
        //         lastName,
        //         email,
        //         phone,
        //         comment
        //     });

        // console.log(formData);

        successMessage.textContent= "Your message has been sent, Thank you.";
        success.appendChild(successMessage);

        // if (response.ok) {
        //     console.log('success');
         


        //     // document.location.replace('/thankyou');

        // } else {
        //     alert(response.statusText+"\n Unable to send message");
            
        // }
    }
}

document.querySelector('#contact-form').addEventListener('submit', sendMessage);