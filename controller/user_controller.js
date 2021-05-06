const User = require('../models/userSchema');


module.exports.profile = function(req,res){
    res.render('users',{title:'users'})
}

module.exports.signin = function(req,res){
    res.render('user_signin',{title:'Mingle | Sign In'});
}

module.exports.signup = function(req,res){
    res.render('user_signup',{title:'Mingle | Sign Up'});
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},(err,user)=>{
        if(err){console.log("Error in querying the document");return}

        if(!user){
            User.create(req.body,(err,user)=>{
                if(err){console.log('error signing up the user');return}

                console.log('invalid data');
                return res.redirect('/users/sign-in');
            })
        }else
            return res.redirect('back');
    });  
}
