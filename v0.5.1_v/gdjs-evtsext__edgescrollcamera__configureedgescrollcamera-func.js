
if (typeof gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera !== "undefined") {
  gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera = {};


gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("NewStyle") != "");
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setString(eventsFunctionContext.getArgument("NewStyle"));
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setString(eventsFunctionContext.getArgument("NewLayer"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).setNumber(eventsFunctionContext.getArgument("NewCamera"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setNumber(eventsFunctionContext.getArgument("NewScrollSpeed"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).setNumber(Math.max(1, eventsFunctionContext.getArgument("NewScreenMargin")));
}}

}


};

gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera.func = function(runtimeScene, NewScreenMargin, NewScrollSpeed, NewLayer, NewCamera, NewStyle, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("EdgeScrollCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("EdgeScrollCamera"),
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
if (argName === "NewScreenMargin") return NewScreenMargin;
if (argName === "NewScrollSpeed") return NewScrollSpeed;
if (argName === "NewLayer") return NewLayer;
if (argName === "NewCamera") return NewCamera;
if (argName === "NewStyle") return NewStyle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__EdgeScrollCamera__ConfigureEdgeScrollCamera.registeredGdjsCallbacks = [];