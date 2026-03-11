
if (typeof gdjs.evtsExt__Translate__translate !== "undefined") {
  gdjs.evtsExt__Translate__translate.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Translate__translate = {};
gdjs.evtsExt__Translate__translate.idToCallbackMap = new Map();


gdjs.evtsExt__Translate__translate.userFunc0x1f7fe80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let key = eventsFunctionContext.getArgument("key");
let parameters = eventsFunctionContext.getArgument("parameters").trim();
let translations = runtimeScene.getGame().getVariablesForExtension("Translate").get("translations").getAllChildren();
let replaceArr = [];

if (parameters !== "") {
    replaceArr = parameters.split(",");
}

for (let line in translations) {
    if (line !== key) {
        continue;
    }

    let translation = translations[line];
    let string = translation.getValue();

    if (string != '') {
        for (let i=0;i<replaceArr.length;i++) {
            let replace = replaceArr[i];
            string = string.split('{'+i+'}').join(replace);
        }
        eventsFunctionContext.returnValue = string;
        return;
    }
}


eventsFunctionContext.returnValue = key;
};
gdjs.evtsExt__Translate__translate.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Translate__translate.userFunc0x1f7fe80(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Translate__translate.func = function(runtimeScene, key, parameters, parentEventsFunctionContext) {
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
if (argName === "key") return key;
if (argName === "parameters") return parameters;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Translate__translate.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Translate__translate.registeredGdjsCallbacks = [];