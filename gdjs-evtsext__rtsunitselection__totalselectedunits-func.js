
if (typeof gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits !== "undefined") {
  gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits = {};
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachIndex3 = 0;

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachObjects3 = [];

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachTemporary3 = null;

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachTotalCount3 = 0;

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects1= [];
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects2= [];
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects3= [];
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects4= [];
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects5= [];


gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595TotalSelectedUnits_9546GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects4});
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects3, gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RTSUnitSelection__IsSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595TotalSelectedUnits_9546GDObjectObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__RTSUnitSelection").getChild("TotalSelectedUnits").add(1);
}}

}


};gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__RTSUnitSelection").getChild("TotalSelectedUnits").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects2);

for (gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachIndex3 = 0;gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachIndex3 < gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects2.length;++gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachIndex3) {
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects3.length = 0;


gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachTemporary3 = gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects2[gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachIndex3];
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects3.push(gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RTSUnitSelection").getChild("TotalSelectedUnits")); }}}

}


};gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects4.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects5.length = 0;

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects4.length = 0;
gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.GDObjectObjects5.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__RTSUnitSelection__TotalSelectedUnits.registeredGdjsCallbacks = [];