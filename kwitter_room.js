
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAjWIw6U6G1OWPVWGz4KpEMXI5sOAMcTtA",
      authDomain: "kwitter-41534.firebaseapp.com",
      databaseURL: "https://kwitter-41534-default-rtdb.firebaseio.com",
      projectId: "kwitter-41534",
      storageBucket: "kwitter-41534.appspot.com",
      messagingSenderId: "40165184399",
      appId: "1:40165184399:web:b44c58699b47f8faa3b1fa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("theusername");

document.getElementById("title_username").value="Welcome "+username + "!";

function addRoom()
{
room_name=document.getElementById("Roomname").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding user"
});

localStorage.setItem("roomname", room_name);

window.location="kwitter_page.html";

};


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+Room_names);

      row="<div class='room_name' id='"+Room_names+"' onclick='redirectoroomname(this.id)'>#"+Room_names+"</div><hr>"
      
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectoroomname(room_name)
{
console.log(room_name);

localStorage.setItem("roomname", room_name);

window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("theusername");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
























































































































































































































