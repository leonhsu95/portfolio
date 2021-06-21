function sendMessage(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").nodeValue.trim();
    let lastName = document.getElementById("lastName").nodeValue.trim();
    let phone = document.getElementById("phone").nodeValue.trim();
    let email = document.getElementById("email").nodeValue.trim();
    let comment= document.getElementById("comment").nodeValue.trim();

if (firstname && lastname && phone && email && comment) {
    
            let formData = JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                comment
            });

        console.log(formData);

        // if (response.ok) {
        //     console.log('success');
         


        //     // document.location.replace('/thankyou');

        // } else {
        //     alert(response.statusText+"\n Unable to send message");
            
        // }
    }
}

document.querySelector('#contact-form').addEventListener('submit', sendMessage);