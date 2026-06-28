function register(){

const user = document.getElementById("regUser").value;
const pass = document.getElementById("regPass").value;

if(!user || !pass){
alert("Fill all fields");
return;
}

localStorage.setItem("user", user);
localStorage.setItem("pass", pass);

alert("Account created!");

window.location.href = "login.html";

}

function login(){

const user = document.getElementById("loginUser").value;
const pass = document.getElementById("loginPass").value;

const savedUser = localStorage.getItem("user");
const savedPass = localStorage.getItem("pass");

if(user === savedUser && pass === savedPass){

localStorage.setItem("loggedIn", "true");

alert("Login successful!");

window.location.href = "index.html";

}else{

alert("Wrong credentials");

}

}

function logout(){

localStorage.removeItem("loggedIn");

window.location.href = "login.html";

}