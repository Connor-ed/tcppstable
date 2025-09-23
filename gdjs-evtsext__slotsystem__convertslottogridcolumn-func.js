
if (typeof gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn !== "undefined") {
  gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn = {};


gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = -(1);}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__IsSpaceGrid.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext);
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Slot"), gdjs.evtsExt__SlotSystem__SpaceGridWidth.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), eventsFunctionContext));}
}

}


};

gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn.func = function(runtimeScene, SpaceName, Slot, parentEventsFunctionContext) {
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
        eventsFunctionContext._objectArraysMap[objectName].push(object);
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
if (argName === "SpaceName") return SpaceName;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__SlotSystem__ConvertSlotToGridColumn.registeredGdjsCallbacks = [];