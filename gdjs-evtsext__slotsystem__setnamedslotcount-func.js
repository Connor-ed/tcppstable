
if (typeof gdjs.evtsExt__SlotSystem__SetNamedSlotCount !== "undefined") {
  gdjs.evtsExt__SlotSystem__SetNamedSlotCount.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SetNamedSlotCount = {};


gdjs.evtsExt__SlotSystem__SetNamedSlotCount.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__NamedSlotMax.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("SlotName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetNamedSlotContent.func(runtimeScene, Math.max(0, eventsFunctionContext.getArgument("Value")), eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("SlotName"), "Count", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__NamedSlotMax.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("SlotName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0;
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetNamedSlotContent.func(runtimeScene, gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Value"), 0, gdjs.evtsExt__SlotSystem__NamedSlotMax.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("SlotName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("SlotName"), "Count", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__SlotSystem__SetNamedSlotCount.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesSpaceExists.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesNamedSlotExist.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("SlotName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__SetNamedSlotCount.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SlotSystem__SetNamedSlotCount.func = function(runtimeScene, Value, SpaceName, SlotName, parentEventsFunctionContext) {
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
if (argName === "SlotName") return SlotName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SetNamedSlotCount.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__SetNamedSlotCount.registeredGdjsCallbacks = [];