const dbManager = require ('../database.config/database.manager');


    function InsertarTweet(req,res){

        if (!req.body) {
            res.status(400).send({
              message: "Request body is empty!!!!"
            });
            return;
        }
        const tweet = {
            tweet: req.body.tweet
        }


    }

    function leerTweet_usuario(req,res){

        


    }