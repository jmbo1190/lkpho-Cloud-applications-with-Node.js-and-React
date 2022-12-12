# Create an express server from scratch with nodemon

Go to the /home/project directory.
`cd /home/project`

Create a directory named myexpressapp and change to that directory

`mkdir myexpressapp`
`cd myexpressapp`

Now run `npm init`.
This will init the api directory to serve as a web application. Follow the prompts on the screen to complete the intialization.

The package name by default is the name of the current folder (myexpressapp in this case). You can specify a different name if you want.
Next it asks you for the version you want to set. The default is 1.0.0.
It then prompts for a description where you can give a short description of what the api intends to do. You can leave it blank.
Next we specify the entry point into the API, which by default is index.js.
When it prompts for the author, you can give your name or leave it blank.
License by default is ISC (Internet Systems Consortium) which means it is a permissive license that lets people do anything with your code with proper attribution and without warranty.
It will generate the contents for your package.json, a file that keeps track of all the packages your server application needs, and asks you to check if the details are OK. Once you confirm, the details are all written on to the `package.json`.

Now run the following command to install express.

`npm install express --save`

--save option ensures that the package.json is updated.

Now run `touch index.js` command. You will see that this file is created in the file explorer. You can use the IDE to write the code you want inside from what you have learnt in the previous exercises.
Sample code has been given here:
```
const express = require('express');
const app = new express();
const port = 8080;

app.get("/", (req,res) => {
    return res.send("Hello World!");
});

let server = app.listen(port, () => {
    console.log("listening at http://localhost:"+ port)
})
```




Make changes in `package.json` to start the server with `npm start`. Include "start" under `scripts`.
```
{
  "name": "myexpressapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",                             // added line
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^X.X.X"
  }
}
```

From the command prompt, you can now run `npm start` to run the server.

Now you can include other end points or make changes to the server as needed. But it can be very frustrating to stop and start the server everytime you make changes. There is a package that comes handy in this case. The package is called `nodemon`. __Every time you make changes in the server API, it will automatically restart the server__. Let’s install that in the same directory where we created our `index.js`. We will install and store it as a **dev dependency** with the `–save-dev` option because we want to use this only when we are running the server locally in our development environment.

`npm install --save-dev nodemon`

Once nodemon is installed, we will make changes to package.json to make use of this and re-start the script when there are changes. We will include the `"start" : "nodemon index.js"` in the scripts section of our package.json. With the changes, the package.json will look like this.
```
{
  "name": "myexpressapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start" : "nodemon index.js",         // line updated
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^X.X.X"
  },
  "devDependencies": {
    "nodemon": "^X.X.X"
  }
}
```

At the command prompt now run `npm start` to start the web server.
Now make some change or add another endpoint returns and see if the server is restarting and changes are reflecting without having to explicitly restart. Magic!

Congratulations! You have completed the lab for express JS.