
if (typeof gdjs.evtsExt__CurvedMovement__ClosePath !== "undefined") {
  gdjs.evtsExt__CurvedMovement__ClosePath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__ClosePath = {};


gdjs.evtsExt__CurvedMovement__ClosePath.userFunc0x1ba7dc0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const pathName = eventsFunctionContext.getArgument("PathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

let curvedPath = curvedPaths.get(pathName);
if (!curvedPath) {
    curvedPath = new gdjs.__curvedMovementExtension.CurvedPath();
    curvedPaths.set(pathName, curvedPath);
}

curvedPath.close();

};
gdjs.evtsExt__CurvedMovement__ClosePath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__ClosePath.userFunc0x1ba7dc0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__ClosePath.func = function(runtimeScene, PathName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CurvedMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CurvedMovement"),
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
if (argName === "PathName") return PathName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__ClosePath.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CurvedMovement__ClosePath.registeredGdjsCallbacks = [];