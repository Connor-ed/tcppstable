
if (typeof gdjs.evtsExt__RTSUnitSelection__SetSelected !== "undefined") {
  gdjs.evtsExt__RTSUnitSelection__SetSelected.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RTSUnitSelection__SetSelected = {};
gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1= [];
gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects2= [];


gdjs.evtsExt__RTSUnitSelection__SetSelected.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1[i].getVariables().get("__RTSUnitSelection").getChild("Selected"), true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1[i].getVariables().get("__RTSUnitSelection").getChild("Selected"), false);
}
}}

}


};

gdjs.evtsExt__RTSUnitSelection__SetSelected.func = function(runtimeScene, Object, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RTSUnitSelection"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RTSUnitSelection"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects2.length = 0;

gdjs.evtsExt__RTSUnitSelection__SetSelected.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__SetSelected.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__RTSUnitSelection__SetSelected.registeredGdjsCallbacks = [];