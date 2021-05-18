
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBkhTDYkKkDrlv5rsBRlMEZSHQuongIXZQ",
    authDomain: "panaderiafatima.firebaseapp.com",
    databaseURL: "https://panaderiafatima.firebaseio.com",
    projectId: "panaderiafatima",
    storageBucket: "panaderiafatima.appspot.com",
    messagingSenderId: "252217706269",
    appId: "1:252217706269:web:ba65cf3315d2eea55043f4",
    measurementId: "G-EBPPNM04S7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
	const auth = firebase.auth();
	
	
	function signUp(){
		
		//var email = document.getElementById("email");
		//var password = document.getElementById("password");
		//boolean length=true;
		
		/*
		if(password.value.length>=8 && password.value)){
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Usuario nuevo creado");
		}else{
			alert("Utiliza una contraseña de 8 caracteres");
		}*/
		
            var res; 
            var str = document.getElementById("password").value; //str comes from strenght
			var email = document.getElementById("email");
			
		
				
					
				
					if (str.match(/[a-z]/g) && str.match( 
							/[A-Z]/g) && str.match( 
							/[0-9]/g) && str.match( 
							/[^a-zA-Z\d]/g) && str.length >= 8){
								
						res = "TRUE"; 
						alert("Usuario registrado correctamente");
					}else{
						res = "FALSE"; 
						alert("Utiliza una contraseña de 8 caracteres, incluye al menos una mayuscula y un signo de puntuacion.");
					}
				
		
	}
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Terminó su sesión");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Usuario activo: " + email);
			
			var txt;
			var r = confirm("Selecciona aceptar si quieres ir a la pagina de inicio.\nSelecciona cancelar para realizar otra acción.");
				if (r == true) {
					txt = "Has iniciado sesion correctamente";
					//Take user to a different or home page
					window.location="index.html";
				} else {
					txt = "Has cerrado sesion correctamente";
				}
					document.getElementById("demo").innerHTML = txt;

			//is signed in
			
		}else{
			
			alert("Sin usuario activo");
			//no user is signed in
		}
		
		
		
	});
	
