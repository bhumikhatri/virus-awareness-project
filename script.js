function showMessage() {

    document.getElementById("message").innerHTML =
        "🛡️ Safety Reminder: Keep your software updated and avoid suspicious links, files and downloads.";
}

let score = 0;
let answered = [];

function answer(question, result) {

    if (answered.includes(question)) {
        return;
    }

    answered.push(question);

    if (result === "correct") {
        score++;
    }

    document.getElementById("score").innerHTML =
        "Score: " + score + " / 5";

    if (answered.length === 5) {
        setTimeout(function() {
            alert("Quiz Completed! Your Score: " + score + " / 5");
        }, 300);
    }
}

function sendFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let feedback = document.getElementById("feedbackMessage");

    if (name === "" || email === "" || message === "") {
        feedback.innerHTML = "⚠️ Please fill all the fields.";
        return;
    }

    feedback.innerHTML = "✅ Thank you, " + name + "! Your feedback has been submitted.";
}

function searchVirus() {
    let search = document.getElementById("searchInput").value.toLowerCase();
    let result = document.getElementById("searchResult");

    if (search === "") {
        result.innerHTML = "⚠️ Please enter a virus type.";
    } 
    else if (search.includes("trojan")) {
        result.innerHTML = "🦠 Trojan: Malware that can appear as a legitimate program.";
    } 
    else if (search.includes("worm")) {
        result.innerHTML = "🪱 Worm: Malware that can spread between computers.";
    } 
    else if (search.includes("ransomware")) {
        result.innerHTML = "🔒 Ransomware: Malware that can prevent access to files or systems.";
    } 
    else if (search.includes("virus")) {
        result.innerHTML = "🦠 A computer virus is malicious software that can disrupt or damage computer systems.";
    } 
    else {
        result.innerHTML = "❓ Information not found. Try: Virus, Trojan, Worm, or Ransomware.";
    }
}

function closeAlert() {
    document.getElementById("safetyAlert").style.display = "none";
}