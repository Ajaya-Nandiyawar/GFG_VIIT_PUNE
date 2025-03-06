document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Simulate a login check (replace this with real authentication logic)
    if (username === "Ajaya" && password === "abc@123") {
        alert("Login successful!");
        // Redirect or proceed with login logic here
        window.location.href = "index.html"; // Example redirection
    } else {
        alert("Invalid username or password.");
    }
});
