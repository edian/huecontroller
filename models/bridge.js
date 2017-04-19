/**
 * Created by sytedian on 4/16/17.
 */
'use strict';

var hue = require("node-hue-api");
var host;
var id;
var HueApi = hue.HueApi,
    lightState = hue.lightState;
var username = "c-LNzZUlZgcCnwlutBx3yndwNrNsSJyQvy0MqwHr",
    api ,
    state = lightState.create();

class bridge {
    constrcutor(){

    }

    setHueOn(callback){
        hue.nupnpSearch(function(err, result) {
            if (err) throw err;
            //displayBridges(result);
            console.log("Hue Bridges Found: " + JSON.stringify(result));
            host = result[0].ipaddress;
            console.log('host+'+host);
            if(host){
                api = new HueApi(host, username);
                api.lights(function(err, lights) {
                    if (err) throw err;
                    var lightJson = JSON.stringify(lights, null, 2);
                    console.log(lights);
                    //id =lightJson.lights.id;
                    id='2';
                    if(id){
                       // api.turnOn();
                       // api = new HueApi(host, username);
                        api.setLightState(id, state.on(), function(err, result2) {

                            if (err) throw err;
                            console.log('resulth'+result2);
                            callback(result2);
                        });
                    }
                });
            }
        });
    }

    setHueOff(callback){
        hue.nupnpSearch(function(err, result) {
            if (err) throw err;
            //displayBridges(result);
            console.log("Hue Bridges Found: " + JSON.stringify(result));
           // var host1 = JSON.stringify(result);
            host = result[0].ipaddress;
            console.log('host+'+host);
            if(host){
                api = new HueApi(host, username);
                console.log('host1+'+host);
                api.lights(function(err, lights) {
                    if (err) throw err;
                    var lightJson = JSON.stringify(lights, null, 2);
                    console.log(lights);
                    //id =lightJson.lights[0].id;
                    id='2';
                    if(id){
                       // api = new HueApi(host, username);
                        console.log(id);
                        api.setLightState(id, state.off(), function(err, result2) {

                            if (err) throw err;
                            console.log('resulth'+result2);
                            callback(result2);
                        });
                    }
                });
            }
        });
    }

    changeHueValue(value,callback){
        hue.nupnpSearch(function(err, result) {
            if (err) throw err;
            //displayBridges(result);
            console.log("Hue Bridges Found: " + JSON.stringify(result));
            host = result[0].ipaddress;
            console.log('host+'+host);
            if(host){
                api = new HueApi(host, username);
                api.lights(function(err, lights) {
                    if (err) throw err;
                    var lightJson = JSON.stringify(lights, null, 2);
                    console.log(lights);
                   // id =lightJson.lights.id;
                    id='2';
                    if(id){
                       // api = new HueApi(host, username);
                        api.setLightState(id, state.on().brightness(parseInt(value)), function(err, result2) {

                            if (err) throw err;
                            console.log('resulth'+result2);
                            callback(result2);
                        });
                    }
                });
            }
        });
    }


}

module.exports = bridge;