//YOUR FIREBASE LINKS
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

room_name=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id+message_data);
name=message_data['name'];
message=message_data['message'];
likes=message_data['like'];

nametag="<h3>"+name+"<img src='tick.png' class='user_tick'></h3>";

messagetag="<h3>"+message+"</h3>";

likestag="<button class='btn btn-warning' id='"+firebase_message_id+"' onclick='updatelikes(this.id)'>";

button_text="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+likes+"</span> </button>";

row=nametag+messagetag+likestag+button_text;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }

getData();

function send()
{
message=document.getElementById("message").value;
firebase.database().ref(room_name).push({
      name:username, message:message, like: 0
});
document.getElementById("message").value="";
}

function updatelikes(buttonid)
{
likespresent=document.getElementById(buttonid).value;
likesupdated=likespresent+1;
firebase.database().ref(room_name).child(buttonid).update({
      like: likesupdated
});

}

function logout()
{
      localStorage.removeItem("theusername");
      localStorage.removeItem("roomname");
      window.location="index.html";
}