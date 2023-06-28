var UserPrompt = prompt("enter username");
var PassPrompt= prompt("enter password");

var database = [{
	username: "salim",
	password: "salim123"
},

{
	username: "arya",
	password: "stark123"
},

{
	username: "tyrion",
	password: "lannister"
},

{
	username: "Daenerys",
	password: "Targaryen"
},

{
	username: "cersei",
	password: "lannister"
},

{
	username: "kal",
	password: "drogo"
}
];


function valid(username, password) {
	for(var i=0; i<database.length; i++){
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signin(username, password) {
	if (valid(username, password)){
		alert("login successfully");
	} else{
		alert("wrong username and password");
	}
}

signin(UserPrompt, PassPrompt)

