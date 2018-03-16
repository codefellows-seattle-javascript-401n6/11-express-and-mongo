'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//get /api/cupcakes
app.get(`/api/senshi`,(req,res)=>{
    res.send('In the name of the moon!');
})


app.listen(PORT,() =>{
    console.log('http://localhost:'+ PORT);
});

