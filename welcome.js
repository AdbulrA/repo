// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBX-gmGgvAnIE-2xdnu3XLVyRdhjNOQyMo",
    authDomain: "wrud-8b641.firebaseapp.com",
    projectId: "wrud-8b641",
    storageBucket: "wrud-8b641.appspot.com",
    messagingSenderId: "147068688128",
    appId: "1:147068688128:web:f7039c6a15eee2f684c5e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Set database variable

// document.getElementById("loginForm").addEventListener("submit",(event)=>{
//     event.preventDefault()
//   })
var database = firebase.database()

function save() {
  var newproject = document.getElementById('newproject').value
  var area = document.getElementById('area').value
  var username = document.getElementById('username').value
  var amount = document.getElementById('amount').value
  var date = document.getElementById('date').value

 

  var image=document.getElementById("photo").files[0];
    //now get your image name
    var imageName=image.name;
    //firebase  storage reference
    //it is the path where your image will store
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference

    var uploadTask=storageRef.put(image);

    uploadTask.on('state_changed',function (snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is " + progress +" done");
    },function (error) {
        //handle error here
        console.log(error.message);
    },function () {
       //handle successful uploads on complete

        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            //get your upload image url here...
            console.log(downlaodURL);
        });
    });

  database.ref('users/' + username).set({
    newproject : newproject,
    area : area,
    username : username,
    amount : amount,
    date : date
    
   
  })

  alert('Saved')
}

firebase.auth().onAuthStateChanged((user)=>{
	if(!user){
		location.replace("index.html")
	}else{
		document.getElementById("user").innerHTML = "Hello,"+user.email
	}
})


function logout(){
	firebase.auth().signOut()
}