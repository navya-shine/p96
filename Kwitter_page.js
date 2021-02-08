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

  room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
    function send()
{
      msg = document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}