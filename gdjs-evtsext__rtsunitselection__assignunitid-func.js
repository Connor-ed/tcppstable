
if (typeof gdjs.evtsExt__RTSUnitSelection__AssignUnitID !== "undefined") {
  gdjs.evtsExt__RTSUnitSelection__AssignUnitID.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RTSUnitSelection__AssignUnitID = {};
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachIndex2 = 0;

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachObjects2 = [];

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachTemporary2 = null;

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachTotalCount2 = 0;

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects1= [];
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2= [];
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3= [];
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects4= [];


gdjs.evtsExt__RTSUnitSelection__AssignUnitID.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595AssignUnitID_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3});
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2, gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3[i].getVariables().get("__RTSUnitSelection").getChild("SelectedUnitID")).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2, gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RTSUnitSelection__IsSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__AssignUnitID.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595AssignUnitID_9546GDObjectObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__RTSUnitSelection").getChild("TotalSelectedUnits").add(1);
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3[i].getVariables().get("__RTSUnitSelection").getChild("SelectedUnitID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RTSUnitSelection").getChild("TotalSelectedUnits")));
}
}}

}


};gdjs.evtsExt__RTSUnitSelection__AssignUnitID.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects1);

for (gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachIndex2 = 0;gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachIndex2 < gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects1.length;++gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachIndex2) {
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2.length = 0;


gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachTemporary2 = gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects1[gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachIndex2];
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2.push(gdjs.evtsExt__RTSUnitSelection__AssignUnitID.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RTSUnitSelection__AssignUnitID.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RTSUnitSelection__AssignUnitID.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects4.length = 0;

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__AssignUnitID.GDObjectObjects4.length = 0;


return;
}

gdjs.evtsExt__RTSUnitSelection__AssignUnitID.registeredGdjsCallbacks = [];