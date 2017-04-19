/**
 * Created by sytedian on 4/16/17.
 */
var HueApi = require("node-hue-api").HueApi;

var host = "192.168.2.129",
    userDescription = "device description goes here";

var displayUserResult = function(result) {
    console.log("Created user: " + JSON.stringify(result));
};

var displayError = function(err) {
    console.log(err);
};

var hue = new HueApi();

// --------------------------
// --------------------------
// Using a callback (with default description and auto generated username)
hue.createUser(host, function(err, user) {
    if (err) throw err;
    displayUserResult(user);
});