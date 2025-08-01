document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("fullName").value,
    parentEmail: document.getElementById("parentEmail").value,
    phone: document.getElementById("phone").value,
    ageGroup: document.getElementById("ageGroup").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxP-VP0YvWsPLJ3usYIakE93gFKIrS3nB6DK6Y756Gvx5HToI538vNN_nRAepVHyudktA/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {
      document.getElementById("registerMessage").textContent = "✅ Registration successful!";
      document.getElementById("registerForm").reset();
    })
    .catch(error => {
      document.getElementById("registerMessage").textContent = "❌ Registration failed. Please try again.";
      console.error("Error:", error);
    });
});
