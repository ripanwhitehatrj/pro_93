var firebaseConfig = {
    apiKey: "AIzaSyDLEzRp6O6axD0CVEI90w39Ft1igyJLIT0",
    authDomain: "kwitter-15f8d.firebaseapp.com",
    databaseURL: "https://kwitter-15f8d-default-rtdb.firebaseio.com",
    projectId: "kwitter-15f8d",
    storageBucket: "kwitter-15f8d.appspot.com",
    messagingSenderId: "979499138332",
    appId: "1:979499138332:web:651f08739465b8f76a8ed9"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("roomname-"+Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
      function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}