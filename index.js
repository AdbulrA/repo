var firebaseConfig = {
    apiKey: "AIzaSyBX-gmGgvAnIE-2xdnu3XLVyRdhjNOQyMo",
    authDomain: "wrud-8b641.firebaseapp.com",
    databaseURL: "https://wrud-8b641-default-rtdb.firebaseio.com",
    projectId: "wrud-8b641",
    storageBucket: "wrud-8b641.appspot.com",
    messagingSenderId: "147068688128",
    appId: "1:147068688128:web:f7039c6a15eee2f684c5e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)
  
	document.getElementById("loginForm").addEventListener("submit",(event)=>{
		event.preventDefault()
	})


firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		location.replace("welcome.html")
	}
})

function login(){
	const email  = document.getElementById("email").value
    const password=document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
      document.getElementById("error").innerHTML = alert(error.message)
    })
}


function signUp(){

   const email  = document.getElementById("email").value
    const password=document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch((error)=>{
      document.getElementById("error").innerHTML = alert(error.message)
    })
}