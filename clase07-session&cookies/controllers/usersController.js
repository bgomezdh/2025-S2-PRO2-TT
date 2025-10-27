let db = require("../database/models");
let bcrypt = require ('bcryptjs');

let usersController = {
    show: function(req, res) {
      
            return res.render("register");     
    },

    create: function(req, res){
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;

        // guardar el usuario
        let usuario = {
            name: username,
            email: email,
            password: bcryptjs.hashSync(password, 10)
        }

        db.User.create(usuario)
            .then(function(results) {
                return res.redirect("/")
            })
            .catch(function(err) {
                return res.send(err)
            })

        
    },

    login: function(req, res){
       
        return res.render('login');
    },

    processLogin: function(req,res){

         // recuperar los datos del form
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme
        }
       
        // validar que el mail y la pasword sean correctas

        //poner en session
        req.session.user = userInfo;

        // check de recordarme?
        
        res.redirect("/movies")
        
    },
    logout: function(req,res){
        
        req.session.destroy();
        res.clearCookie('userData');

        return res.redirect('/')

    }

  };


  module.exports = usersController;