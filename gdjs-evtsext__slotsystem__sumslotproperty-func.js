
if (typeof gdjs.evtsExt__SlotSystem__SumSlotProperty !== "undefined") {
  gdjs.evtsExt__SlotSystem__SumSlotProperty.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SumSlotProperty = {};


gdjs.evtsExt__SlotSystem__SumSlotProperty.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SlotSystem__SumSlotProperty.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpSlot");
const iterableReference2 = runtimeScene.getScene().getVariables().get("__SlotSystem").getChild(eventsFunctionContext.getArgument("SpaceName"));
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__HasSlotProperty.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtTools.common.toNumber(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName"))), eventsFunctionContext.getArgument("Property"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0)
{
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").add(gdjs.evtsExt__SlotSystem__NumberOfSlotProperty.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), gdjs.evtTools.common.toNumber(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpName"))), eventsFunctionContext.getArgument("Property"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}
}
}

}


};gdjs.evtsExt__SlotSystem__SumSlotProperty.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal")); }}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_TmpVal").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesSpaceExists.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__SumSlotProperty.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SlotSystem__SumSlotProperty.func = function(runtimeScene, SpaceName, Property, parentEventsFunctionContext) {
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
if (argName === "Property") return Property;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SumSlotProperty.eventsList2(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__SlotSystem__SumSlotProperty.registeredGdjsCallbacks = [];