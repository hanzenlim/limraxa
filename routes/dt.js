exports.findHanzen = function(req, res) {
    var Firebase = require("firebase");
    var myFirebaseRef = new Firebase("https://limraxa.firebaseio.com/");

    myFirebaseRef.child("hanzen").on("value", function(snapshot) {

      res.send(JSON.stringify(snapshot.val()));
    });
};


exports.findJon = function(req, res) {
    var Firebase = require("firebase");
    var myFirebaseRef = new Firebase("https://limraxa.firebaseio.com/");

    myFirebaseRef.child("jon").on("value", function(snapshot) {

      res.send(JSON.stringify(snapshot.val()));
    });
};