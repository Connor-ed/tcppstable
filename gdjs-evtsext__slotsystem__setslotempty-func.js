
if (typeof gdjs.evtsExt__SlotSystem__SetSlotEmpty !== "undefined") {
  gdjs.evtsExt__SlotSystem__SetSlotEmpty.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SetSlotEmpty = {};


gdjs.evtsExt__SlotSystem__SetSlotEmpty.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesSlotExist.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("Slot"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetSlotCount.func(runtimeScene, 0, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("Slot"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.variable.variableRemoveChild(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild(eventsFunctionContext.getArgument("Slot")), "Properties");
}{gdjs.evtTools.variable.variableRemoveChild(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild(eventsFunctionContext.getArgument("Slot")), "Item");
}}

}


};

gdjs.evtsExt__SlotSystem__SetSlotEmpty.func = function(runtimeScene, SpaceName, Slot, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SlotSystem"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SlotSystem"),
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
if (argName === "SpaceName") return SpaceName;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SetSlotEmpty.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__SetSlotEmpty.registeredGdjsCallbacks = [];