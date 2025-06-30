
if (typeof gdjs.evtsExt__THNK__OnMessage !== "undefined") {
  gdjs.evtsExt__THNK__OnMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK__OnMessage = {};


gdjs.evtsExt__THNK__OnMessage.userFunc0x1a7ccf0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!runtimeScene.thnkClient) eventsFunctionContext.returnValue = THNK.server.events.popMessage(
    eventsFunctionContext.getArgument("message"),
    eventsFunctionContext.getArgument("extra_data")
);

};
gdjs.evtsExt__THNK__OnMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK__OnMessage.userFunc0x1a7ccf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK__OnMessage.func = function(runtimeScene, message, extra_data, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("THNK"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("THNK"),
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
if (argName === "message") return message;
if (argName === "extra_data") return extra_data;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK__OnMessage.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__THNK__OnMessage.registeredGdjsCallbacks = [];