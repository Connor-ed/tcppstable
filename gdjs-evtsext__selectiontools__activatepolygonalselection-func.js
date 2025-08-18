
if (typeof gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection !== "undefined") {
  gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection = {};


gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType").setString("Polygonal");
}{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SideLength").setNumber(eventsFunctionContext.getArgument("SideLength"));
}{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MaximumVertexCount").setNumber(eventsFunctionContext.getArgument("MaximumVertexCount"));
}{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MergeProximity").setNumber(eventsFunctionContext.getArgument("MergeProximity"));
}{gdjs.evtsExt__SelectionTools__ClearSelection.func(runtimeScene, eventsFunctionContext);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("TruePolygon");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("TruePolygon"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("TruePolygon");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("TruePolygon"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("MaximumVertexCount") < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MaximumVertexCount").setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("SideLength") < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SideLength").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("MergeProximity") < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("MergeProximity").setNumber(1);
}}

}


};

gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection.func = function(runtimeScene, SideLength, MaximumVertexCount, MergeProximity, TruePolygon, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectionTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectionTools"),
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
if (argName === "SideLength") return SideLength;
if (argName === "MaximumVertexCount") return MaximumVertexCount;
if (argName === "MergeProximity") return MergeProximity;
if (argName === "TruePolygon") return TruePolygon;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SelectionTools__ActivatePolygonalSelection.registeredGdjsCallbacks = [];