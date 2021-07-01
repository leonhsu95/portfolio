const contactForm=document.getElementById("contact-form");contactForm.setAttribute("novalidate",""),contactForm.addEventListener("submit",a=>{hideAllErrors(contactForm);let b=contactForm.elements.firstName,c=contactForm.elements.lastName,d=contactForm.elements.phone,e=contactForm.elements.email,f=contactForm.elements.comment,g=document.getElementById("success"),h=document.createElement("p");h.setAttribute("class","message-success"),2>b.value.trim().length&&showError(b,a,"Name field must have at least 2 characters"),2>c.value.trim().length&&showError(c,a,"Name field must have at least 2 characters");""===d.value||/^((000|112|106)|(((\+61 ?\(?0?)|(\(?0))[23478]\)?([- ]?[0-9]){8})|((13|18)([- ]?[0-9]){4}|(1300|1800|1900)([- ]?[0-9]){6}))$/.test(d.value)||showError(d,a,"Please enter a valid Australian number");""===e.value?showError(e,a,"Email is required"):!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())&&showError(e,a,"Please enter a valid email address"),20>f.value.trim().length?showError(f,a,"Please enter 20+ characters"):(h.textContent="Your message has been sent, Thank you.",g.appendChild(h),setTimeout(function(){location.reload()},5e3))});function showError(a,b,c){b.preventDefault(),a.parentNode.classList.add("error");let d=a.parentNode.querySelector(".error-message");d||(d=document.createElement("span"),d.classList.add("error-message"),a.parentNode.appendChild(d)),d.innerHTML=c}function hideAllErrors(a){let b=a.querySelectorAll(".error");for(let c=0;c<b.length;c++)b[c].classList.remove("error")}