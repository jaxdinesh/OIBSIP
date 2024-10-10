document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate an API request (replace with actual API call)
    const response = await mockApiLogin(username, password);

    if (response.success) {
        // Redirect to the welcome page
        window.location.href = "welcome.html";
    } else {
        document.getElementById("error-message").textContent = response.message;
    }
});

// Mock API function for login (replace with actual API call)
async function mockApiLogin(username, password) {
    // Simulate a delay for API response (remove in production)
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === "dinesh" && password === "123456789") {
        return { success: true };
    } else {
        return { success: false, message: "Invalid username or password" };
    }
}
if (response.success) {
    // Redirect to the welcome page
    window.location.href = "welcome.html";
}
