function addUser()
{
   username=document.getElementById("username").value;
   localStorage.setItem("theusername", username);
   window.location="kwitter_room.html";
}