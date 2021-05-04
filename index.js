const express = require('express');
const app = express();

const PORT = 8000;

// For any request we require our routes index
app.use('/',require('./routes'));

app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in firing up the server..')
    }
    else
        console.log(`Server is running on the port ${PORT}...`)
});
