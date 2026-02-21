//--------------------- conduct page -----------------------------------
function finish() {
    const form = document.getElementById("contactForm");
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const namePattern = /^[A-Za-z ]+$/;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!namePattern.test(name)) {
            alert("Enter a valid name (letters only)");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email address");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Enter a valid 10-digit phone number");
            return;
        }

        if (message === "") {
            alert("Message cannot be empty");
            return;
        }
        alert("Message sent successfully! 🚗");

        // Create object
        let contactData = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Get old data from localStorage
        let allContacts = localStorage.getItem("contacts");

        if (allContacts) {
            allContacts = JSON.parse(allContacts);
        } else {
            allContacts = [];
        }

        // Add new data
        allContacts.push(contactData);

        // Store back to localStorage
        localStorage.setItem("contacts", JSON.stringify(allContacts));

        alert("Message saved successfully!");

        // Clear form
        form.reset();

        console.log(allContacts);

    }







//------------------------------------------------------------
