var firebaseConfig = {
      apiKey: "AIzaSyBf7hmTikFpFyF0vDImoRB1D3BPHtFSDm8",
      authDomain: "kwitter-f623d.firebaseapp.com",
      databaseURL: "https://kwitter-f623d-default-rtdb.firebaseio.com",
      projectId: "kwitter-f623d",
      storageBucket: "kwitter-f623d.appspot.com",
      messagingSenderId: "617754078513",
      appId: "1:617754078513:web:d18128821444584c101410",
      measurementId: "G-DYMTVQ0EBE"
    };


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}