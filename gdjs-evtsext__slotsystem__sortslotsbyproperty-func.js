
if (typeof gdjs.evtsExt__SlotSystem__SortSlotsByProperty !== "undefined") {
  gdjs.evtsExt__SlotSystem__SortSlotsByProperty.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SortSlotsByProperty = {};


gdjs.evtsExt__SlotSystem__SortSlotsByProperty.userFunc0xfa86c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const system = runtimeScene.getVariables().get("__SlotSystem");
const mainSpace = system.getChild(eventsFunctionContext.getArgument("SpaceName"));
const space = mainSpace.clone();
const size = system.getChild("_Config").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild("Size").getAsNumber();
const elements = space.getAllChildrenArray().sort(comp);

mainSpace.clearChildren();

elements.forEach(function(val, index, arr){
    mainSpace.addChild(index.toString(), val);
});

function comp(e1, e2)
{
    const sourceHasProps = e1.hasChild("Properties");
    const destHasProps = e2.hasChild("Properties");
    const sourceHasItem = e1.hasChild("Item");
    const destHasItem = e2.hasChild("Item");

    if (!sourceHasItem)
        return 1;

    if (!destHasItem)
        return -1;
            
    if (!sourceHasProps && !destHasProps)
        return 0;
    
    if (sourceHasProps != destHasProps)
        return sourceHasProps ? 1 : -1;

    const property = eventsFunctionContext.getArgument("Property");
    const sourceProps = e1.getChild("Properties");
    const destProps = e2.getChild("Properties");
    const sourceHasValue = sourceProps.hasChild(property);
    const destHasValue = destProps.hasChild(property);

    if (!sourceHasValue && !destHasValue)
        return 0;
    
    if (sourceHasValue != destHasValue)
        return sourceHasValue ? 1 : -1;
    
    const e1Property = sourceProps.getChild(property);
    const e2Property = destProps.getChild(property);

    switch(e1Property.getType())
    {
        case "number":
            return e1Property.getAsNumber() - e2Property.getAsNumber();
        break;
        case "string":
            return e1Property.getAsString().localeCompare(e2Property.getAsString());
        break;

        default:
            return e1Property.getValue().toString().localeCompare(e2Property.getValue().toString());
        break;
    }

    return 0;
}

};
gdjs.evtsExt__SlotSystem__SortSlotsByProperty.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotSystem__SortSlotsByProperty.userFunc0xfa86c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__SlotSystem__SortSlotsByProperty.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SlotSystem__DoesSpaceExists.func(runtimeScene, eventsFunctionContext.getArgument("SpaceName"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SlotSystem__SortSlotsByProperty.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SlotSystem__SortSlotsByProperty.func = function(runtimeScene, SpaceName, Property, FromNamedSlots, parentEventsFunctionContext) {
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
if (argName === "FromNamedSlots") return FromNamedSlots;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SortSlotsByProperty.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__SortSlotsByProperty.registeredGdjsCallbacks = [];