
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MinY !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MinY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinY = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MinY.idToCallbackMap = new Map();
gdjs.evtsExt__ValuesOfMultipleObjects__MinY.GDobjectsObjects1= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MinY.userFunc0x2dc9a68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// If the instances doesn't exist we exit this function, returnValue will be 0
if (objects.length == 0) return;

let minX = objects[0].getAABB().min[1] || 0;

objects.forEach((object) => {

    let aabb = object.getAABB();

    if (aabb.min[1] < minX) {
        minX = aabb.min[1];
    }
})

eventsFunctionContext.returnValue = minX;
};
gdjs.evtsExt__ValuesOfMultipleObjects__MinY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("objects"), gdjs.evtsExt__ValuesOfMultipleObjects__MinY.GDobjectsObjects1);

const objects = gdjs.evtsExt__ValuesOfMultipleObjects__MinY.GDobjectsObjects1;
gdjs.evtsExt__ValuesOfMultipleObjects__MinY.userFunc0x2dc9a68(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MinY.func = function(runtimeScene, objects, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"objects": objects
},
  _objectArraysMap: {
"objects": gdjs.objectsListsToArray(objects)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ValuesOfMultipleObjects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ValuesOfMultipleObjects"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__MinY.GDobjectsObjects1.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MinY.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ValuesOfMultipleObjects__MinY.GDobjectsObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MinY.registeredGdjsCallbacks = [];