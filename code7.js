gdjs.BrowserCode = {};
gdjs.BrowserCode.localVariables = [];
gdjs.BrowserCode.idToCallbackMap = new Map();


gdjs.BrowserCode.eventsList0 = function(runtimeScene) {

};

gdjs.BrowserCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.BrowserCode.eventsList0(runtimeScene);


return;

}

gdjs['BrowserCode'] = gdjs.BrowserCode;
