$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyBqIoDLo0FRJ57x3038G_ZXIcBNP8zxN64",
    authDomain: "project--3321423629344255592.firebaseapp.com",
    databaseURL: "https://project--3321423629344255592.firebaseio.com",
    projectId: "project--3321423629344255592",
    storageBucket: "project--3321423629344255592.appspot.com",
    messagingSenderId: "1028949503010"
  };
  firebase.initializeApp(config);

  //instance of google provider
  var provider = new firebase.auth.GoogleAuthProvider();

  $('#sign-in').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
      console.log(user.uid);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });


});
