const login = (req, res)=>{
    res.render("pages/login");
}

const register = (req, res)=>{
    res.render("pages/register");
}

const home = (req, res)=>{
    if(req.user){
        res.render("pages/home", {user:req.user})
    }else{
        res.redirect("http://localhost:3000/login")
    }
}

const dashboard = (req,res)=>{
    res.render("pages/dashboard")
    /* res.render("pages/home",{user:req,dashboard}) */ //esto provocaba el error 
}

module.exports = {
    login: login,
    register: register,
    home: home,
    dashboard:dashboard
}