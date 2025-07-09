
if (typeof gdjs.evtsExt__CursorType__DoChangeCursorType !== "undefined") {
  gdjs.evtsExt__CursorType__DoChangeCursorType.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CursorType__DoChangeCursorType = {};


gdjs.evtsExt__CursorType__DoChangeCursorType.userFunc0x19a2f50 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const cursorType = eventsFunctionContext.getArgument("CursorType");

runtimeScene.getGame().getRenderer().getCanvas().style.cursor = cursorType;

};
gdjs.evtsExt__CursorType__DoChangeCursorType.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CursorType__DoChangeCursorType.userFunc0x19a2f50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CursorType__DoChangeCursorType.func = function(runtimeScene, CursorType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CursorType"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CursorType"),
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
if (argName === "CursorType") return CursorType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorType__DoChangeCursorType.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CursorType__DoChangeCursorType.registeredGdjsCallbacks = [];