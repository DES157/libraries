// wait until page loaded before doing anything
window.addEventListener('load', function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVWrFDSjVnDeyeA1sfq_d_koqxMeZAx7M",
    authDomain: "quickstart-39f2f.firebaseapp.com",
    databaseURL: "https://quickstart-39f2f.firebaseio.com",
    storageBucket: "quickstart-39f2f.appspot.com",
    messagingSenderId: "208814389113"
  };
  firebase.initializeApp(config);

  // sign in flow
  var signInButton = document.getElementById('sign-in-button');
  signInButton.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);

    console.log("signInWithPopup")
  });

  // sign out
  var signOutButton = document.getElementById('sign-out-button');
  signOutButton.addEventListener('click', function() {
    firebase.auth().signOut();

    console.log("signOut")
  });

  // do things when a user signs in or out
  // from https://firebase.google.com/docs/auth/web/start
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log(user);

    } else {
      // User is signed out.
      // ...
      console.log('User logged out');
    }
  });

  // from https://youtu.be/k1D0_wFlXgo
  var firebaseOutput = document.getElementById('firebase-output');
  var dbRef = firebase.database().ref().child('text');
  dbRef.on('value', snap => firebaseOutput.innerText = snap.key + ': ' + snap.val());
});
