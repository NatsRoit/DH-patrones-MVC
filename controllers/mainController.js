const path = require("path")

const mainController = {
    index : function ( req,res ) {
        res.sendFile (path.join(__dirname, "../views/home.html"))
    },
    about : function ( req,res ) {
        res.sendFile (path.join(__dirname, "../views/about.html"))
    }
}

module.exports = mainController;
