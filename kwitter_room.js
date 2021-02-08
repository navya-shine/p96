var firebaseConfig = {
    apiKey: "AIzaSyDqPZmJm_sUhqKqJm7XLtjurRSSN63hs20",
    authDomain: "leys-cha.firebaseapp.com",
    projectId: "leys-cha",
    storageBucket: "leys-cha.appspot.com",
    messagingSenderId: "334936352091",
    appId: "1:334936352091:web:60e7023ee7881279caa67e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");

  document.getElementById("user_name").innerHTML="Welcome"+username
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({  
              purpose
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}