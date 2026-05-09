
if (typeof gdjs.evtsExt__SlotSystem__SetSlotPropertyText !== "undefined") {
  gdjs.evtsExt__SlotSystem__SetSlotPropertyText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SetSlotPropertyText = {};
gdjs.evtsExt__SlotSystem__SetSlotPropertyText.idToCallbackMap = new Map();


gdjs.evtsExt__SlotSystem__SetSlotPropertyText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__IsSlotFilled.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("Slot"), eventsFunctionContext);
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetSlotTextContent.func(runtimeScene, eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("Slot"), eventsFunctionContext.getArgument("Property"), "Properties", eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__SlotSystem__SetSlotPropertyText.func = function(runtimeScene, Value, SpaceName, Slot, Property, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
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
if (argName === "Value") return Value;
if (argName === "SpaceName") return SpaceName;
if (argName === "Slot") return Slot;
if (argName === "Property") return Property;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SetSlotPropertyText.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__SetSlotPropertyText.registeredGdjsCallbacks = [];