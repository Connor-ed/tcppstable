
if (typeof gdjs.evtsExt__URLTools__URLQueryStringParameter !== "undefined") {
  gdjs.evtsExt__URLTools__URLQueryStringParameter.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__URLTools__URLQueryStringParameter = {};


gdjs.evtsExt__URLTools__URLQueryStringParameter.userFunc0x23354a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue =
    (new URL(eventsFunctionContext.getArgument("URL"))
        .searchParams
        .get(eventsFunctionContext.getArgument("param")));

};
gdjs.evtsExt__URLTools__URLQueryStringParameter.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__URLTools__URLQueryStringParameter.userFunc0x23354a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__URLTools__URLQueryStringParameter.func = function(runtimeScene, URL, param, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("URLTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("URLTools"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "URL") return URL;
if (argName === "param") return param;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__URLTools__URLQueryStringParameter.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__URLTools__URLQueryStringParameter.registeredGdjsCallbacks = [];