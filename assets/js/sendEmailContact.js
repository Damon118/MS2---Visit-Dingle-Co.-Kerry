function sendMail(contactForm) {
    emailjs.send("gmail", "template_epikr0t", {
        "firstname": contactForm.firstname.value,
        "lastname": contactForm.lastname.value,
        "number": contactForm.number.value,
        "email": contactForm.email.value,
        "message": contactForm.message.value
    })

    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}