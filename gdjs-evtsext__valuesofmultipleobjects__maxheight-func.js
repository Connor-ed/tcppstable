
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight = {};
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex3 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachObjects3 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTemporary3 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTotalCount3 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3= [];


gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1, gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2);


for (gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex3 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex3 < gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2.length;++gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex3) {
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTemporary3 = gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2[gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachIndex3];
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.push(gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[i].getHeight() > eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3[0].getHeight()));
}}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber();}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("MaxHeight", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1[0].getHeight()));
}
{ //Subevents
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.GDObjectObjects3.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__MaxHeight.registeredGdjsCallbacks = [];