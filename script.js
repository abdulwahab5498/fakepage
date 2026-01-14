function handleLogin() {
    const name = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (name === "" || pass === "") {
        alert("Please enter both Name and Password");
    } else {
        alert("Thank you, " + name + "! Login Successful.");
    }
}
