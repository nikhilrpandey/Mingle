const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mingle_dev');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to the database: "));

db.once('open',()=>{
    console.log('Connection to the database is successful...');
})


module.exports = db;