const User = require('../models/userSchema');


module.exports.profile = function(req,res){
    User.findById(req.cookies['user_id'],(err,user)=>{
        if(err){console.log("error fetching page...");return}
        if(!user){
            res.redirect('/users/sign-in');
        }else{
            res.render('users',{title:'profile',username:user.name});
        }
    })
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

module.exports.create_session = function(req,res){
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){console.log("Error in fetching details...");return}

        if(user){
            if(user.password!=req.body.password){
                return res.redirect('back');
            }
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }else{
            return res.redirect('back');
        }
    })
}