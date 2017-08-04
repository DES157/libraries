# Firebase Storage

* [Storage/Web](https://firebase.google.com/docs/storage/web/start)

put()

putFile()

setContentType()

[Uses Google Cloud Storage](https://cloud.google.com/storage/)



When you put a file it's asynchronous and returns an `UploadTask`. You can add a `.then` to the task to handle when it's complete, or use `.on` for more options: `event` (`running`, `progress`, `pause`), `error`, `complete`. If you use both it seems that the Promise handler `then` runs after the `complete` event, but that's a fine point and may not be reliable.

In either case you end up working with an `UploadTaskSnapshot` (a property of `UploadTask`) that can give you information.
