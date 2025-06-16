
if (typeof gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot !== "undefined") {
  gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot = {};


gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Exchange");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__MoveSlotToSlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtsExt__SlotSystem__ConvertGridPositionToSlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("FromColumn"), eventsFunctionContext.getArgument("FromRow"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getArgument("SpaceName"), gdjs.evtsExt__SlotSystem__ConvertGridPositionToSlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("ToColumn"), eventsFunctionContext.getArgument("ToRow"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Exchange");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__MoveSlotToSlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtsExt__SlotSystem__ConvertGridPositionToSlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("FromColumn"), eventsFunctionContext.getArgument("FromRow"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), eventsFunctionContext.getArgument("SpaceName"), gdjs.evtsExt__SlotSystem__ConvertGridPositionToSlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext.getArgument("ToColumn"), eventsFunctionContext.getArgument("ToRow"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__IsSpaceGrid.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.func = function(runtimeScene, SpaceName, FromColumn, FromRow, ToColumn, ToRow, Exchange, parentEventsFunctionContext) {
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
if (argName === "FromColumn") return FromColumn;
if (argName === "FromRow") return FromRow;
if (argName === "ToColumn") return ToColumn;
if (argName === "ToRow") return ToRow;
if (argName === "Exchange") return Exchange;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__MoveGridSlotToGridSlot.registeredGdjsCallbacks = [];