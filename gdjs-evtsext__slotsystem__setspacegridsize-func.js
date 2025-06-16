
if (typeof gdjs.evtsExt__SlotSystem__SetSpaceGridSize !== "undefined") {
  gdjs.evtsExt__SlotSystem__SetSpaceGridSize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotSystem__SetSpaceGridSize = {};


gdjs.evtsExt__SlotSystem__SetSpaceGridSize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild("Size").setNumber(eventsFunctionContext.getArgument("Width") * eventsFunctionContext.getArgument("Height"));
}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild("Width").setNumber(eventsFunctionContext.getArgument("Width"));
}{runtimeScene.getScene().getVariables().get("__SlotSystem").getChild("_Config").getChild(eventsFunctionContext.getArgument("SpaceName")).getChild("Height").setNumber(eventsFunctionContext.getArgument("Height"));
}}

}


};

gdjs.evtsExt__SlotSystem__SetSpaceGridSize.func = function(runtimeScene, SpaceName, Width, Height, parentEventsFunctionContext) {
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
if (argName === "Width") return Width;
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotSystem__SetSpaceGridSize.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotSystem__SetSpaceGridSize.registeredGdjsCallbacks = [];