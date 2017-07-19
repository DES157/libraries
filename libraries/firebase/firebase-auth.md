# Firebase Authentication

There are several auth providers, including Password, Google, Anonymous, etc. You can [Link Multiple Auth Providers](https://firebase.google.com/docs/auth/web/account-linking).

[firebase.auth.Auth](https://firebase.google.com/docs/reference/js/firebase.auth.Auth)

Authentication requires 

    var provider = new firebase.auth.GoogleAuthProvider();



    firebase.auth().signInWithPopup(provider)
    firebase.auth().signInWithRedirect(provider)

These return a [firebase.Promise](https://firebase.google.com/docs/reference/js/firebase.Promise). It's possible to handle with `then()` but it's better practice to use the `onAuthStateChanged()` to not get bitten by intermediate states. Regardless it may be worth handling errors with `catch()`:

    firebase.auth().signInWithPopup(provider).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
    });


[Users in Firebase Projects](https://firebase.google.com/docs/auth/users)

User accounts are associated with [firebase.User](https://firebase.google.com/docs/reference/js/firebase.User). Users have unique `uid`. (Hint: store `uid` as a key, e.g. in database under `users/`).




The current user can be obtained by

    var user = firebase.auth().currentUser;

but it's recommended to do so through an observer

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
        } else {
            // No user is signed in.
        }
    });


