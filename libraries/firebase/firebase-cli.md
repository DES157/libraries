# Firebase CLI

The [Firebase CLI](https://firebase.google.com/docs/cli/) ([firebase-tools](https://www.npmjs.com/package/firebase-tools)) allow convenient interaction with Firebase, as well as previewing site with a local server.


    npm install -g firebase-tools

    firebase login
    firebase init
    firebase serve
    firebase deploy



##### init

Sets up `.firebaserc` and...

1. Select features: Database and/or Hosting
    * Database Setup (set Database Rules file e.g. `database.rules.json`)
    * Hosting Setup (set public assets directory e.g. `public`, choose if should be "single-page app" or not)
2. Associate default project (or not) (saves in `.firebaserc`)




Compare to Firebase SDK ([firebase](https://www.npmjs.com/package/firebase)), which is the js library itself.
