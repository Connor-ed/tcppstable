
if (typeof gdjs.evtsExt__ListScroll__IsPinned !== "undefined") {
  gdjs.evtsExt__ListScroll__IsPinned.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ListScroll__IsPinned = {};
gdjs.evtsExt__ListScroll__IsPinned.GDObjectObjects1= [];
gdjs.evtsExt__ListScroll__IsPinned.GDBaseObjectObjects1= [];


gdjs.evtsExt__ListScroll__IsPinned.userFunc0x1df5c70 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const pintoBehaviorName = eventsFunctionContext.getBehaviorName("Behavior");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const pintoObjectsLists = eventsFunctionContext.getObjectsLists("Object");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const baseObjectsLists = eventsFunctionContext.getObjectsLists("BaseObject");

eventsFunctionContext.returnValue = gdjs.evtTools.obj.twoListsTest(
  (pintoObject, baseObject, pintoBehaviorName) => {
    const behavior = pintoObject.getBehavior(pintoBehaviorName);
    return behavior.baseObject === baseObject;
  },
  pintoObjectsLists,
  baseObjectsLists,
  false,
  pintoBehaviorName
);
};
gdjs.evtsExt__ListScroll__IsPinned.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ListScroll__IsPinned.userFunc0x1df5c70(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ListScroll__IsPinned.func = function(runtimeScene, Object, Behavior, BaseObject, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BaseObject": BaseObject
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "BaseObject": gdjs.objectsListsToArray(BaseObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ListScroll"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ListScroll"),
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

gdjs.evtsExt__ListScroll__IsPinned.GDObjectObjects1.length = 0;
gdjs.evtsExt__ListScroll__IsPinned.GDBaseObjectObjects1.length = 0;

gdjs.evtsExt__ListScroll__IsPinned.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ListScroll__IsPinned.GDObjectObjects1.length = 0;
gdjs.evtsExt__ListScroll__IsPinned.GDBaseObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ListScroll__IsPinned.registeredGdjsCallbacks = [];