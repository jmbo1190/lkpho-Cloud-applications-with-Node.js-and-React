const express = require('express');
const app = new express();

app.use(express.static('cad220_staticfiles'))

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

//  Test program:
//  1. run: node expressStaticPages.js  // Listening at http://localhost:3333

//  2. Open URLs in browser: 
//     http://localhost:3333/ReactCalc.html
//     http://localhost:3333/kitten.jpeg
//     http://localhost:3333/translateToSpanish.html





