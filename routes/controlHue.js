/**
 * Created by sytedian on 4/18/17.
 */
var Bridge=require('../models/bridge');
var bridge = new Bridge();

exports.controlHue = function(req, res){

    var data = req.body;
    console.log('here'+data.status);
    if(data.status==true){
        bridge.setHueOn(function(rs){
            //console.log('rs'+rs);
        });
    }
    else{
        bridge.setHueOff(function(rs){
           // console.log('rs'+rs);
        });
    }

};

exports.controlHueLightValue = function(req, res){

    var data = req.body;
    console.log('here3333333'+data.value);
    bridge.changeHueValue(data.value,function(rs){
        //console.log('rs'+rs);
    });
    res.status(200).send(null);

};