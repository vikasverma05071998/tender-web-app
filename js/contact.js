
// // contact.html
// document.getElementById("formmodules").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the default form submission

//     // Get the form data
//     const formData = {
//         to_name: document.querySelector('[data-dest-name]').value,
//         to_email: document.querySelector('[data-dest-email]').value,
//         subject: document.querySelector('[data-email-subject]').value,
//         message: document.querySelector('[data-email-body]').value,
//     };

//     // Send the email using Email.js
//     emailjs.send("service_qn1syx5", "template_lpv699p", formData)
//         .then(function (response) {
//             console.log("Email sent successfully", response);
//         })
//         .catch(function (error) {
//             console.log("Email could not be sent", error);
//         });

//     // Reset the form
//     document.getElementById("formmodules").reset();
// });

document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("formmodules");
    const statusMessage = document.getElementById("statusMessage");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const to_name = document.querySelector('[data-dest-name]').value;
        const to_email = document.querySelector('[data-dest-email]').value;
        const subject = document.querySelector('[data-email-subject]').value;
        const message = document.querySelector('[data-email-body]').value;

        const xhr = new XMLHttpRequest();
        const url = "https://formspree.io/f/mnqkoyzd"; // Replace with your Formspree email address or use another email service.

        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    statusMessage.innerHTML = "Message sent successfully!";
                    alert("Message sent successfully!")
                    customerForm.reset();
                   
                } else {
                    statusMessage.innerHTML = "Error sending message. Please try again later.";
                   
                }
                setTimeout(function() {
                    statusMessage.innerHTML = ""; // Clear the status message after 3 seconds
                }, 3000);
            }
        };

        const data = {
            to_name: to_name,
            to_email: to_email,
            subject: subject,
            message: message
        };

        xhr.send(JSON.stringify(data));
    });
});
