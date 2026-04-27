
if (typeof gdjs.evtsExt__Translate__setRemoteUrl !== "undefined") {
  gdjs.evtsExt__Translate__setRemoteUrl.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Translate__setRemoteUrl = {};
gdjs.evtsExt__Translate__setRemoteUrl.idToCallbackMap = new Map();


gdjs.evtsExt__Translate__setRemoteUrl.userFunc0xd125d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let path = eventsFunctionContext.getArgument("baseUrl");

if (path != "" && !path.endsWith("/")) {
    path += "/";
}

runtimeScene.getGame().getVariablesForExtension("Translate").get("translationsPath").setString(path);
};
gdjs.evtsExt__Translate__setRemoteUrl.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__Translate__setRemoteUrl.userFunc0xd125d0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Translate__setRemoteUrl.func = function(runtimeScene, baseUrl, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Translate"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Translate"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "baseUrl") return baseUrl;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Translate__setRemoteUrl.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Translate__setRemoteUrl.registeredGdjsCallbacks = [];