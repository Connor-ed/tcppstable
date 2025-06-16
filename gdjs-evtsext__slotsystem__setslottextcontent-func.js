
if (typeof gdjs.evtsExt__SlotSystem__SetSlotTextContent !== "undefined") {
  gdjs.evtsExt__SlotSystem__SetSlotTextContent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SetSlotTextContent = {};


gdjs.evtsExt__SlotSystem__SetSlotTextContent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Parent") : "") == "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild(eventsFunctionContext.getArgument("Slot")).getChild(eventsFunctionContext.getArgument("Tag")).setString(eventsFunctionContext.getArgument("Value"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Parent") : "") != "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild(eventsFunctionContext.getArgument("Slot")).getChild(eventsFunctionContext.getArgument("Parent")).getChild(eventsFunctionContext.getArgument("Tag")).setString(eventsFunctionContext.getArgument("Value"));
}}

}


};

gdjs.evtsExt__SlotSystem__SetSlotTextContent.func = function(runtimeScene, Value, SpaceName, Slot, Tag, Parent, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
if (argName === "SpaceName") return SpaceName;
if (argName === "Slot") return Slot;
if (argName === "Tag") return Tag;
if (argName === "Parent") return Parent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SetSlotTextContent.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__SetSlotTextContent.registeredGdjsCallbacks = [];