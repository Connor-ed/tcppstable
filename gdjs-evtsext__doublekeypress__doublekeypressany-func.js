
if (typeof gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny !== "undefined") {
  gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny = {};
gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.idToCallbackMap = new Map();


gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild("Any"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "__DoublePress_Any");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild("Any"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoublePress_Any");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__DoublePress_Any");
}
{eventsFunctionContext.returnValue = true;}
}

}


};gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoublePress_Any");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__DoublePress_Any");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(37089532);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild("Any"));
}

{ //Subevents
gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "__DoublePress_Any") >= eventsFunctionContext.getArgument("seconds");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoublePress_Any");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__DoublePress_Any");
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__DoublePress").getChild("Any"), false);
}
}

}


};

gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.func = function(runtimeScene, seconds, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
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
if (argName === "seconds") return seconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.eventsList1(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DoubleKeyPress__DoubleKeyPressAny.registeredGdjsCallbacks = [];