if(localStorage.getItem("users")==null);
{
localStorage.setItem("users",JSON.stringify([]));
}
function registerUser(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var emailId = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        username: username, 
        emailId: emailId,
        password: password
    }
        console.log(user);
        var users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
}
    

    