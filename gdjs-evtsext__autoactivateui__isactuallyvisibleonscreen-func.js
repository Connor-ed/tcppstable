
if (typeof gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen !== "undefined") {
  gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen = {};
gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.idToCallbackMap = new Map();
gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.GDObjectObjects1= [];


gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.userFunc0xa3eca8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const pixiObject = object.getRendererObject();
if (!object) {
    eventsFunctionContext.returnValue = false;
} else if (!pixiObject) {
    eventsFunctionContext.returnValue = false;
} else {
    eventsFunctionContext.returnValue = pixiObject.worldVisible;
}
};
gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.GDObjectObjects1);

const objects = gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.GDObjectObjects1;
gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.userFunc0xa3eca8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.func = function(runtimeScene, Object, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoActivateUI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoActivateUI"),
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
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
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

gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.GDObjectObjects1.length = 0;

gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__AutoActivateUI__IsActuallyVisibleOnScreen.registeredGdjsCallbacks = [];