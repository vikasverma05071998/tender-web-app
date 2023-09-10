
// contact.html
document.getElementById("formmodules").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = {
        to_name: document.querySelector('[data-dest-name]').value,
        to_email: document.querySelector('[data-dest-email]').value,
        subject: document.querySelector('[data-email-subject]').value,
        message: document.querySelector('[data-email-body]').value,
    };

    // Send the email using Email.js
    emailjs.send("service_qn1syx5", "template_lpv699p", formData)
        .then(function (response) {
            console.log("Email sent successfully", response);
        })
        .catch(function (error) {
            console.log("Email could not be sent", error);
        });

    // Reset the form
    document.getElementById("formmodules").reset();
});