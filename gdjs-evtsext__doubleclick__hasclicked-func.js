
if (typeof gdjs.evtsExt__DoubleClick__HasClicked !== "undefined") {
  gdjs.evtsExt__DoubleClick__HasClicked.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DoubleClick__HasClicked = {};


gdjs.evtsExt__DoubleClick__HasClicked.userFunc0x23119a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const { clickCounter } = gdjs._DoubleClickExtension;

const buttonName = eventsFunctionContext.getArgument("MouseButton");
const clickCount = eventsFunctionContext.getArgument("ClickCount");

eventsFunctionContext.returnValue = clickCounter.hasClicked(buttonName, clickCount);
};
gdjs.evtsExt__DoubleClick__HasClicked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasClicked.userFunc0x23119a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DoubleClick__HasClicked.func = function(runtimeScene, MouseButton, ClickCount, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DoubleClick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DoubleClick"),
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
if (argName === "MouseButton") return MouseButton;
if (argName === "ClickCount") return ClickCount;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleClick__HasClicked.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DoubleClick__HasClicked.registeredGdjsCallbacks = [];