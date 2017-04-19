/**
 * Created by sytedian on 4/18/17.
 */
var Bridge=require('../models/bridge');

exports.controlHue = function(req, res){
    var bridge = new Bridge();
    var data = req.body;
    console.log('here'+data.status);
    if(data.status=='true'){
        bridge.setHueOn(function(rs){
            console.log('rs'+rs);
        });
    }
    else{
        bridge.setHueOff(function(rs){
            console.log('rs'+rs);
        });
    }

};

exports.controlHueLightValue = function(req, res){
    var bridge = new Bridge();
    var data = req.body;
    console.log('here'+data.value);
    bridge.changeHueValue(data.value,function(rs){
        console.log('rs'+rs);
    });

};