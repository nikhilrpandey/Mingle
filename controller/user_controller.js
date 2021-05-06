module.exports.profile = function(req,res){
    res.render('users',{title:'users'})
}

module.exports.signin = function(req,res){
    res.render('user_signin',{title:'Mingle | Sign In'});
}

module.exports.signup = function(req,res){
    res.render('user_signup',{title:'Mingle | Sign Up'});
}