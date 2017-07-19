// var userId = firebase.auth().currentUser.uid;


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
    console.log("onAuthStateChanged / User signed in");
    console.log(displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData);
    var auth_output = document.querySelector("#firebase-auth");
    // auth_output.innerHTML = user.displayName;
    auth_output.textContent = user.displayName;

    // writeUserData(user.uid, user.displayName, user.email, user.photoURL);
  } else {
    // User is signed out.
    console.log("onAuthStateChanged / User signed out");
    var auth_output = document.querySelector("#firebase-auth");
    auth_output.innerHTML = "No user present";
  }
});
// Get current user (null if not signed in)
//var user = firebase.auth().currentUser;



function writeUserData(userId, name, email, imageUrl) {
  console.log("writeUserData")
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

function setVal(val) {

}


function addEntry(val) {

  var postData = {
    // uid: uid,
    entry: val
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('text').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/text/' + newPostKey] = postData;
  // updates['/user-text/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}



// var textRef = firebase.database().ref('text');
// textRef.on('child_added', function(data) {
//   // addCommentElement(postElement, data.key, data.val().text, data.val().author);
//   console.log('child_added')
//   var output = document.querySelector("#firebase_output");
//   output.innerHTML = form.text.value;
//   output.style.display = "block";
// });


var signInButton = document.getElementById('sign-in-button');
var signOutButton = document.getElementById('sign-out-button');

// Bindings on load.
// from quickstart-js/database
window.addEventListener('load', function() {

  // Bind Sign in button.
  signInButton.addEventListener('click', function() {
    // from https://firebase.google.com/docs/auth/web/google-signin
    var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider);
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("signInWithPopup / Success")
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("signInWithPopup / Error")
    });
  });

  // Bind Sign out button.
  signOutButton.addEventListener('click', function() {
    firebase.auth().signOut();
    console.log("signOut")
  });


  // // Saves message on form submit.
  // messageForm.onsubmit = function(e) {
  //   e.preventDefault();
  //   var text = messageInput.value;
  //   var title = titleInput.value;
  //   if (text && title) {
  //     newPostForCurrentUser(title, text).then(function() {
  //       myPostsMenuButton.click();
  //     });
  //     messageInput.value = '';
  //     titleInput.value = '';
  //   }
  // };
  //
  // // Bind menu buttons.
  // recentMenuButton.onclick = function() {
  //   showSection(recentPostsSection, recentMenuButton);
  // };
  // myPostsMenuButton.onclick = function() {
  //   showSection(userPostsSection, myPostsMenuButton);
  // };
  // myTopPostsMenuButton.onclick = function() {
  //   showSection(topUserPostsSection, myTopPostsMenuButton);
  // };
  // addButton.onclick = function() {
  //   showSection(addPost);
  //   messageInput.value = '';
  //   titleInput.value = '';
  // };
  // recentMenuButton.onclick();
}, false);

// from https://www.youtube.com/watch?v=k1D0_wFlXgo
var firebaseOutput = document.getElementById('firebase-output');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => {
  firebaseOutput.innerText = snap.val();
  console.log("val", snap.val());
});

dbRef.set({
  "name": "my new value"
})

var tmpRef = firebase.database().ref().child('users');

// firebase.database().ref('ref').set()
