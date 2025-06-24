
if (typeof gdjs.evtsExt__THNK__SendMessage !== "undefined") {
  gdjs.evtsExt__THNK__SendMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK__SendMessage = {};


gdjs.evtsExt__THNK__SendMessage.userFunc0x10e9e30 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (runtimeScene.thnkClient) {
    THNK.client.messages.sendClientMessage(
        runtimeScene.thnkClient.adapter,
        eventsFunctionContext.getArgument("message"),
        eventsFunctionContext.getArgument("extra_data")
    );
} else THNK.server.events.addRawMessageToTheQueue(
    runtimeScene.thnkServer
        ? runtimeScene.thnkServer.adapter.getServerID()
        : THNK.players.getCurrentPlayerID(),
    eventsFunctionContext.getArgument("message"),
    eventsFunctionContext.getArgument("extra_data")
);

};
gdjs.evtsExt__THNK__SendMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK__SendMessage.userFunc0x10e9e30(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK__SendMessage.func = function(runtimeScene, message, extra_data, parentEventsFunctionContext) {
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


gdjs.evtsExt__THNK__SendMessage.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__THNK__SendMessage.registeredGdjsCallbacks = [];