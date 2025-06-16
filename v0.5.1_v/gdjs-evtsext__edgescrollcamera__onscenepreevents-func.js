
if (typeof gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents = {};


gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) <= gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber();
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setNumber(-(gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.func(runtimeScene, gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) - gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) >= gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber();
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setNumber(gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.func(runtimeScene, gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) - gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) <= gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber();
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setNumber(-(gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.func(runtimeScene, gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) - gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, gdjs.evtTools.variable.getVariableString(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2)), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) >= gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber();
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setNumber(gdjs.evtsExt__EdgeScrollCamera__AbsoluteScrollSpeed.func(runtimeScene, gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) - gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


};gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber());
}}

}


};gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) != 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber()) != 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setNumber(0);
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setNumber(0);
}
{ //Subevents
gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.eventsList6(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__EdgeScrollCamera__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
