/**
 * Created by sytedian on 4/16/17.
 */
'use strict';

var hue = require("node-hue-api");

class bridge {
    constrcutor(){

    }

    getBridgeData(callback){
        hue.nupnpSearch(function(err, result) {
            if (err) throw err;
            //displayBridges(result);
            console.log("Hue Bridges Found: " + JSON.stringify(result));
            callback(result);
        });

    }

}

module.exports = bridge;