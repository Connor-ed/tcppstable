
if (typeof gdjs.evtsExt__DoubleClick__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__DoubleClick__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DoubleClick__onScenePostEvents = {};


gdjs.evtsExt__DoubleClick__onScenePostEvents.userFunc0x2315ca0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const { clickCounter } = gdjs._DoubleClickExtension;

clickCounter.reset();

};
gdjs.evtsExt__DoubleClick__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__onScenePostEvents.userFunc0x2315ca0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DoubleClick__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleClick__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DoubleClick__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__DoubleClick__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__DoubleClick__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__DoubleClick__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__DoubleClick__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
