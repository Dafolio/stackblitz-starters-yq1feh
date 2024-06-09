// we used chatgpt for javascript
document.addEventListener("DOMContentLoaded", function() {
    var applyButton = document.getElementById("applyButton");
    var closeButton = document.getElementById("closeFormButton");
    var submitButton = document.getElementById("submitFormButton");
    var formPopup = document.getElementById("myForm");

    applyButton.addEventListener("click", function() {
        formPopup.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        formPopup.style.display = "none";
    });

    submitButton.addEventListener("click", function() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var qualifications = document.getElementById("qualifications").value;

        if (name && email && qualifications) {
            var output = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Qualifications:</strong> ${qualifications}<br>
            <strong>Application Status:</strong> Application sent to company!
            `;

            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = output;

            formPopup.style.display = "none";
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});