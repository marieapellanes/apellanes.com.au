        function validateForm() {
            // Reset error messages
            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("messageError").textContent = "";

            // Validate name
            const name = document.getElementById("name").value.trim();
            if (name === "") {
                document.getElementById("nameError").textContent = "Name is required";
                return false;
            }

            // Validate email
            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Invalid email address";
                return false;
            }

            // Validate message
            const message = document.getElementById("message").value.trim();
            if (message === "") {
                document.getElementById("messageError").textContent = "Message is required";
                return false;
            }

            // Hide the form and display the thank-you message
            document.getElementById("contactForm").style.display = "none";
            document.getElementById("thankYou").style.display = "block";

            return false; // Prevent form submission (you can remove this if you want to submit the form)
        }
 