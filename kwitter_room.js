const firebaseConfig = {

    apiKey: "AIzaSyBSjiEG5_J9OPBaoWllYubItC1Id3iGgZc",
  
    authDomain: "project-97-b1e6b.firebaseapp.com",
  
    databaseURL: "https://project-97-b1e6b-default-rtdb.firebaseio.com",
  
    projectId: "project-97-b1e6b",
  
    storageBucket: "project-97-b1e6b.appspot.com",
  
    messagingSenderId: "159471198612",
  
    appId: "1:159471198612:web:9d8bbc083dd594ee882f81"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
         window.locaton.replace("kwitter.html");
}

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}