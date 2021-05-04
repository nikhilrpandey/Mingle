// it returns a function
const express = require('express');
const app = express();

const PORT = 8000;

app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in firing up the server..')
    }
    else
        console.log(`Server is running on the port ${PORT}...`)
});
