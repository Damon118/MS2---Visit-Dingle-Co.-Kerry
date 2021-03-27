function sendMail(consultationButton) {
    emailjs.send("gmail", "template_ngde9d4", {
        "phone_number": consultationButton.phone_number.value,
        "date": consultationButton.date.value,
        "time": consultationButton.time.value
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