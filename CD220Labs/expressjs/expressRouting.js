const express = require('express');
const app = new express();

var userRouter = express.Router()
var itemRouter = express.Router()

userRouter.use(function (req, res, next) {
    console.log('User query Time:', Date());
    next();
  })

userRouter.get('/:id', function (req, res, next) {
    res.send("User "+req.params.id+" last successful login "+Date())
})
  
itemRouter.use(function (req, res, next) {
    console.log('Item query Time:', Date())
    next()
  })

itemRouter.get('/:id', function (req, res, next) {
    res.send("Item "+req.params.id+" last enquiry "+Date())
})

app.use('/user', userRouter)
app.use('/item', itemRouter)


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

// Test the application
// 1. Run server
//    node expressRouting.js   // Listening at http://localhost:3333

// 2. In other terminal:
//    curl localhost:3333/item/1  //  Item 1 last enquiry Mon Dec 12 2022 18:02:06 GMT+0100 (Central European Standard Time)%
//    curl localhost:3333/user/1  //  User 1 last successful login Mon Dec 12 2022 18:03:03 GMT+0100 (Central European Standard Time)%


