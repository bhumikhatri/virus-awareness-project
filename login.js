function login(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("loginMessage");

    if (username === "student" && password === "1234") {

        message.innerHTML = "✅ Login Successful!";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);

    } else {

        message.innerHTML =
            "❌ Invalid username or password.";
    }
}