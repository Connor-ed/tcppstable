
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY = {};
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects2= [];


gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.mapOfGDgdjs_9546evtsExt_9595_9595ValuesOfMultipleObjects_9595_9595AbsoluteCenterOfObjectsY_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects1});
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.mapOfGDgdjs_9546evtsExt_9595_9595ValuesOfMultipleObjects_9595_9595AbsoluteCenterOfObjectsY_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects1});
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.evtsExt__ValuesOfMultipleObjects__MaxY.func(runtimeScene, gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.mapOfGDgdjs_9546evtsExt_9595_9595ValuesOfMultipleObjects_9595_9595AbsoluteCenterOfObjectsY_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtsExt__ValuesOfMultipleObjects__MinY.func(runtimeScene, gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.mapOfGDgdjs_9546evtsExt_9595_9595ValuesOfMultipleObjects_9595_9595AbsoluteCenterOfObjectsY_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 2; }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ValuesOfMultipleObjects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ValuesOfMultipleObjects"),
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

gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects2.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__AbsoluteCenterOfObjectsY.registeredGdjsCallbacks = [];