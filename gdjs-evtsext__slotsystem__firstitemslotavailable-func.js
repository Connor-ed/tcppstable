
if (typeof gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable !== "undefined") {
  gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable = {};


gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName");
const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpSlot");
const iterableReference3 = runtimeScene.getScene().getVariables().get("__SlotSystem").getChild(eventsFunctionContext.getArgument("SpaceName"));
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__IsSlotFilled.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtTools.common.toNumber(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__SlotItemName.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtTools.common.toNumber(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == eventsFunctionContext.getArgument("Item");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SlotSystem__IsSlotFull.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtTools.common.toNumber(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")) == -(1);
}
}
}
if (isConditionTrue_0)
{
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName"))));
}}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")) == -(1);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(gdjs.evtsExt__SlotSystem__FirstEmptySlot.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


};gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(-(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesSpaceExists.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")); }}}

}


};

gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.func = function(runtimeScene, SpaceName, Item, parentEventsFunctionContext) {
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
if (argName === "Item") return Item;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.eventsList2(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__SlotSystem__FirstItemSlotAvailable.registeredGdjsCallbacks = [];