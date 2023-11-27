function register() {
    var title    = document.getElementById("title");
    var change   = document.getElementById("change");
    var button   = document.getElementById("button");
    var confirm  = document.getElementById("confirm");
    var remember = document.getElementById("remember");
    
    if (title.innerHTML === "Login") {
        title.innerHTML = "Register";
        button.innerHTML = "Register";
        change.innerHTML = "You have an account? Login!";

        remember.style.display = "none";
        confirm.style.display = "flex";
    } else {
        title.innerHTML = "Login";
        button.innerHTML = "Login";
        change.innerHTML = "You don't have an account? Sign in!";

        remember.style.display = "block";
        confirm.style.display = "none";
    }
}