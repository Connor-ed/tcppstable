
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MaxY !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxY = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.GDobjectsObjects1= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.userFunc0x296bc18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// If the instances doesn't exist we exit this function, returnValue will be 0
if (objects.length == 0) return;

let minX = objects[0].getAABB().max[1] || 0;

objects.forEach((object) => {

    let aabb = object.getAABB();
    
    if (aabb.max[1] > minX) {
        minX = aabb.max[1];
    }
})

eventsFunctionContext.returnValue = minX;
};
gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("objects"), gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.GDobjectsObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.GDobjectsObjects1);
gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.userFunc0x296bc18(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.func = function(runtimeScene, objects, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.GDobjectsObjects1.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.GDobjectsObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.registeredGdjsCallbacks = [];