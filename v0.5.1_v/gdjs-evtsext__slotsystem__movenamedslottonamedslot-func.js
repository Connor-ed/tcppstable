
if (typeof gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot !== "undefined") {
  gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot = {};


gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__IsNamedSlotFilled.func(runtimeScene, eventsFunctionContext.getArgument("ToSpaceName"), eventsFunctionContext.getArgument("ToSlot"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Exchange");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_NamedSlots").getChild(eventsFunctionContext.getArgument("ToSpaceName")).getChild(eventsFunctionContext.getArgument("ToSlot"))), runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("ToSpaceName")).getChild("_Tmp"));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_NamedSlots").getChild(eventsFunctionContext.getArgument("FromSpaceName")).getChild(eventsFunctionContext.getArgument("FromSlot"))), runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_NamedSlots").getChild(eventsFunctionContext.getArgument("ToSpaceName")).getChild(eventsFunctionContext.getArgument("ToSlot")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("ToSpaceName")), "_Tmp"));
if (isConditionTrue_0) {
{gdjs.evtsExt__SlotSystem__SetNamedSlotEmpty.func(runtimeScene, eventsFunctionContext.getArgument("FromSpaceName"), eventsFunctionContext.getArgument("FromSlot"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("ToSpaceName")), "_Tmp");
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("ToSpaceName")).getChild("_Tmp")), runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_NamedSlots").getChild(eventsFunctionContext.getArgument("FromSpaceName")).getChild(eventsFunctionContext.getArgument("FromSlot")));
}{gdjs.evtTools.variable.variableRemoveChild(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("ToSpaceName")), "_Tmp");
}}

}


};gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesNamedSlotExist.func(runtimeScene, eventsFunctionContext.getArgument("FromSpaceName"), eventsFunctionContext.getArgument("FromSlot"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesNamedSlotExist.func(runtimeScene, eventsFunctionContext.getArgument("ToSpaceName"), eventsFunctionContext.getArgument("ToSlot"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ToSlot") : "") != eventsFunctionContext.getArgument("FromSlot"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("FromSpaceName") : "") != eventsFunctionContext.getArgument("ToSpaceName"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.func = function(runtimeScene, FromSpaceName, FromSlot, ToSpaceName, ToSlot, Exchange, parentEventsFunctionContext) {
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
if (argName === "FromSpaceName") return FromSpaceName;
if (argName === "FromSlot") return FromSlot;
if (argName === "ToSpaceName") return ToSpaceName;
if (argName === "ToSlot") return ToSlot;
if (argName === "Exchange") return Exchange;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__MoveNamedSlotToNamedSlot.registeredGdjsCallbacks = [];