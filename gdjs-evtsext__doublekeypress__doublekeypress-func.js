
if (typeof gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress !== "undefined") {
  gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress = {};


gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild(eventsFunctionContext.getArgument("key")), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild(eventsFunctionContext.getArgument("key")), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}{eventsFunctionContext.returnValue = true;}}

}


};gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("key"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(36088876);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild(eventsFunctionContext.getArgument("key")));
}
{ //Subevents
gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key")) >= eventsFunctionContext.getArgument("seconds");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__DoublePress_" + eventsFunctionContext.getArgument("key"));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild(eventsFunctionContext.getArgument("key")), false);
}}

}


};

gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.func = function(runtimeScene, key, seconds, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DoubleKeyPress"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DoubleKeyPress"),
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
if (argName === "key") return key;
if (argName === "seconds") return seconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.eventsList1(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DoubleKeyPress__DoubleKeyPress.registeredGdjsCallbacks = [];