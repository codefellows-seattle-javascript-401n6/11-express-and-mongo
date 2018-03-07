# Amber Kim CodeFellows Lab 11 Express and MongoDB

## Introduction
This is a simple node.js app with an Express Server that implements Restful API's and uses MongoDB for storage.

## To Run This Application
Make sure you have your Mongo Daemon running.

Run server.js. Some example tools and commands you can use:
```
node server.js
// for node

nodemon server.js
// if you have nodemon installed globally

npm run start
// the package.json in this repo is configured to run "nodemon server.js" with this command.
```

RECOMMENDED: Test this app by using an http client like Postman.

### For Getting all the Projects:
```
http://localhost:3000/api/projects
```

### For getting a specific Project:
```
http://localhost:3000/api/projects?id=<valid project id>
```

Improper GET request will return 404 not found


### For POST requests, use:
```
http://localhost:3000/api/projects?
```
and send proper JSON in the request body
```
{
    "name": "Woohoo!",
    "description": "The Arithmetic.add method expects two integers as parameters and returns either null if the entered arguments are invalid or an integer as the sum of both numbers.",
    "link": "https://github.com/amgranad/01-node-ecosystem/tree/master/lab-amber"
}
```

Proper POST requests will return JSON
Improper POST requests will return 400 bad request.

### For PUT requests, use
```
http://localhost:3000/api/projects?id=<valid project id>
```
and send proper JSON in the request body:
```
{
    "name": "Woohoo!",
    "description": "The Arithmetic.add method expects two integers as parameters and returns either null if the entered arguments are invalid or an integer as the sum of both numbers.",
    "link": "https://github.com/amgranad/01-node-ecosystem/tree/master/lab-amber"
}
```