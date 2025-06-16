
if (typeof gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup !== "undefined") {
  gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup = {};
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1= [];
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects2= [];


gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595IsAssignedToControlGroup_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1});
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595IsAssignedToControlGroup_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1});
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__RTSUnitSelection__ControlGroupID.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595IsAssignedToControlGroup_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == eventsFunctionContext.getArgument("ControlGroupID"));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__RTSUnitSelection__ControlGroupID.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595IsAssignedToControlGroup_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != eventsFunctionContext.getArgument("ControlGroupID"));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.func = function(runtimeScene, Object, ControlGroupID, parentEventsFunctionContext) {
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
if (argName === "ControlGroupID") return ControlGroupID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects2.length = 0;

gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__RTSUnitSelection__IsAssignedToControlGroup.registeredGdjsCallbacks = [];