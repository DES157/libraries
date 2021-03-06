# Firebase Realtime Database


* [Web/JavaScript](https://firebase.google.com/docs/database/web/start)

Derived from [here](https://firebase.google.com/docs/database/) and:

* [firebase.database](https://firebase.google.com/docs/reference/js/firebase.database)
* [firebase.database.Reference](https://firebase.google.com/docs/reference/js/firebase.database.Reference)

        // Get a reference to the database service
        var database = firebase.database();

Get reference using `ref()`

    // Get a reference to the root of the Database
    var rootRef = firebase.database().ref();
    
    // Get a reference to the /users/ada node
    var adaRef = firebase.database().ref("users/ada");
    // The above is shorthand for the following operations:
    //var rootRef = firebase.database().ref();
    //var adaRef = rootRef.child("users/ada");

### Data?

You del in references and they store JSON objects...
Or lists (with `push()`)

name/value pairs
comma separated
curly braces for objects
brackets for arrays

firebase stores arrays as lists (collections) of objects with integer key names



### Writing to Database

##### Adding to database

* push() - creates a unique key
* set() - set overwrites all data at path, including children
* update()
* transaction() - atomically modify data

Examples

push, set, update

Push generates a new child location and is good for adding items to a collection. Generates a random key name. Can provide a value directly (`push(value)`) or get the random key to use elsewhere (`push().key`).

1

here what if the Element doesn't exit?

    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });

or if working with lists (see https://firebase.google.com/docs/database/web/lists-of-data)

    newRef = push();
    newRef.set({stuff})

2
   
    var postData = {
      entry: val
    };
    
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('text').push().key;
    
    var updates = {};
    updates['/text/' + newPostKey] = postData;
    updates['/user-text/' + uid + '/' + newPostKey] = postData;
    
    return firebase.database().ref().update(updates);

##### Removing data

* remove()

### Reading from Database


##### Reading data

* `on()` - event handler, can specify events!
* `off()` - detaches callback
* `once()` - one time event handler!

Can use Promises with `once()` by appending `.then()` otherwise may be asynchronous. See https://firebase.googleblog.com/2016/01/keeping-our-promises-and-callbacks_76.html

Events:

* `child_added`
* `child_changed`
* `child_removed`
* `child_moved`
* `value` - snapshot contains entire list

key, val()

forEach()
...


### Manipulating Data

Sorting generates `Query` object:

* `orderByKey`
* `orderByChild(path)`
* `orderByValue`

Filtering:

* `limitToFirst()`
* `limitToLast()`
* `startAt()`
* `endAt()`
* `equalTo()`


---

### JSON

Structured as *JSON tree*.

1. *array* `[value, value, ...]`
2. *object* `{name/value pair, name/value pair, ...}`
3. *name/value pair* `"field": value` (double quotes)
4. *value*: number, string (double quotes), boolean, array, object, `null`



## Database Security

### Database Rules

* [Security & Rules](https://firebase.google.com/docs/database/security/)

##### Rule Types

* `.read`
* `.write`
* `.validate`
* `.indexOn`


###### Default security rules

    {
      "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }

###### No auth

    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }


Starting

    var database = firebase.database();


* ref
    * child



* [firebase.database.Reference](https://firebase.google.com/docs/reference/js/firebase.database.Reference)

Properties:

Methods:

* `child()`


* [firebase.database.Query](https://firebase.google.com/docs/reference/js/firebase.database.Query)



---

#### Misc

how to structure databases?

https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html

Be 

