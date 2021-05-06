const express = require('express');
// this is for the layouts in the views rendered to the users
const expressLayouts = require('express-ejs-layouts');
const db=require('./config/mongoose');
const app = express();

// setting up the port
const PORT = 8000;


app.set('view engine','ejs');
app.set('views','./views');

// this is the address of the static files in the directory. Now in the direcory whenever we will point to any file we will do it  using path ahead of this
app.use(express.static('./assets'));
app.use(expressLayouts);

// setting up the layout fetching 
app.set('layout extractStyles',true);
app.set('layout extractScritps',false);


// Setting up the views engine


// For any request we require our routes index
app.use('/',require('./routes'));


app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in firing up the server..')
    }
    else
        console.log(`Server is running on the port ${PORT}...`)
});
