exports.findAll = function(req, res) {
    var Firebase = require("firebase");
    
    var myFirebaseRef = new Firebase("https://limraxa.firebaseio.com/");

    var selfRes = res;
    myFirebaseRef.child("wow").on("value", function(snapshot) {

      // res.sendfile('public/baho.html')
      res.send(JSON.stringify(snapshot.val()));
          // console.log(snapshot.val().toString());
    });
};