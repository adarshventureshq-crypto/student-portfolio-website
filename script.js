
// INTERACTIVE NAVIGATION MENU

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function() {

    navigation.classList.toggle("active");

});


// NAVIGATION LINK FUNCTIONALITY

const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

    });

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET USER INPUT
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // CHECK REQUIRED FIELDS
    if (name === "" || email === "" ||
        subject === "" || message === "") {

        formMessage.textContent =
        "Please fill in all the fields.";

        formMessage.style.color = "red";

        return;
    }

    // CHECK NAME LENGTH
    if (name.length < 3) {

        formMessage.textContent =
        "Name must contain at least 3 characters.";

        formMessage.style.color = "red";

        return;
    }

    // CHECK EMAIL FORMAT
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
        "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }

    // CHECK MESSAGE LENGTH
    if (message.length < 10) {

        formMessage.textContent =
        "Message must contain at least 10 characters.";

        formMessage.style.color = "red";

        return;
    }

    // SUCCESS MESSAGE
    formMessage.textContent =
    "Your form has been validated successfully!";

    formMessage.style.color = "green";

    alert("Form submitted successfully!");

});


// RESET FORM EVENT

contactForm.addEventListener("reset", function() {

    formMessage.textContent = "";

});
