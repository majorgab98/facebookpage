var database = [
    {
        username: "gabriel",
        password: "secret"
    },
    {
        username:"crystal",
        password:"titi10"
    },
    {
        username:"alberto",
        password:"didi"
    }
];

var newsFeed =[
    { 
        username: "alberto",
        timeline: "I love javascript"
    },
    {
        username: "sally",
        timeline: "I wonder what I will be able to code next"
    }
];

var userNamePrompt= prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(username,password) { 
    for (var i=0; i < database.length; i++) { 
        if (database[i].username === username && password ==database[i].password) { 
            return true;
        } 
    }
     return false;        
}

function signIn(username,password) {

    if (isUserValid(username,password)) {
        console.log(newsFeed);
    }else { 
        alert("Sorry, the username and password are incorrrect!");
    }
}

signIn(userNamePrompt, passwordPrompt); 
