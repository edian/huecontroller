/**
 * Created by sytedian on 4/18/17.
 */
var Bridge=require('../models/bridge');

exports.controlHue = function(req, res){
    var bridge = new Bridge();
    var data = req.body;
    console.log('here'+data.status);
    bridge.getBridgeData(function(rs){
        console.log('rs'+rs);
    });

};