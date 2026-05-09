
if (typeof gdjs.evtsExt__SelectionTools__Select !== "undefined") {
  gdjs.evtsExt__SelectionTools__Select.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SelectionTools__Select = {};
gdjs.evtsExt__SelectionTools__Select.idToCallbackMap = new Map();
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects1= [];
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects2= [];
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects3= [];


gdjs.evtsExt__SelectionTools__Select.userFunc0x2237398 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const targets = eventsFunctionContext.getObjectsLists("Targets").items;
const invertSelection = eventsFunctionContext.getArgument("InvertSelection");

const vertex = runtimeScene
  .getVariables()
  .get("__SelectionTools")
  .getChild("Vertex")
  .getAllChildrenArray();

const vertexMinX = vertex[0].getAsNumber() < vertex[2].getAsNumber() ? vertex[0].getAsNumber() : vertex[2].getAsNumber();
const vertexMaxX = vertex[0].getAsNumber() > vertex[2].getAsNumber() ? vertex[0].getAsNumber() : vertex[2].getAsNumber();
const vertexMinY = vertex[1].getAsNumber() < vertex[3].getAsNumber() ? vertex[1].getAsNumber() : vertex[3].getAsNumber();
const vertexMaxY = vertex[1].getAsNumber() > vertex[3].getAsNumber() ? vertex[1].getAsNumber() : vertex[3].getAsNumber();

const tempDict = {};

//filter the targets whose center lie inside the rectangle
for (const targetName in targets){
  tempDict[targetName] = targets[targetName].filter(object => {
    const objectX = object.getCenterXInScene();
    const objectY = object.getCenterYInScene();

    const result = objectX > vertexMinX && objectX < vertexMaxX && objectY > vertexMinY && objectY < vertexMaxY;
    return invertSelection ? !result : result;
  });
  targets[targetName].length = 0;
}

for (const targetName in tempDict){
  for (const value of tempDict[targetName]){
    targets[targetName].push(value);
  }
}
};
gdjs.evtsExt__SelectionTools__Select.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SelectionTools__Select.userFunc0x2237398(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


};gdjs.evtsExt__SelectionTools__Select.userFunc0x1c9faf8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const targets = eventsFunctionContext.getObjectsLists("Targets").items;
const invertSelection = eventsFunctionContext.getArgument("InvertSelection");
const preSelect = eventsFunctionContext.getArgument("PreSelect");

const vertices = runtimeScene
    .getVariables()
    .get("__SelectionTools")
    .getChild("Vertices")
    .getAllChildrenArray();

const temporaryDictionary = {};

//filter the targets whose center lie inside the polygon
for (const targetName in targets){
  temporaryDictionary[targetName] = targets[targetName].filter(object => {
    const x = object.getCenterXInScene();
    const y = object.getCenterYInScene();

    let inside = false;

    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
  
      const vi = [vertices[i].getAllChildrenArray()[0].getAsNumber(), vertices[i].getAllChildrenArray()[1].getAsNumber()];
      const vj = [vertices[j].getAllChildrenArray()[0].getAsNumber(), vertices[j].getAllChildrenArray()[1].getAsNumber()];
      
      if (vi[1] > y != vj[1] > y && x < ((vj[0] - vi[0]) * (y - vi[1])) / (vj[1] - vi[1]) + vi[0]){
        inside = !inside;
      }
    }
    return invertSelection ? !inside : inside;
  });
  targets[targetName].length = 0;
}

for (const targetName in temporaryDictionary){
  for (const value of temporaryDictionary[targetName]){
    targets[targetName].push(value);
  }
}
};
gdjs.evtsExt__SelectionTools__Select.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Polygonal";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("PreSelect");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices")) > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex"));
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex"), Math.round(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)));
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex"), Math.round(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"), runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("ChildVertex"));
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("PopVertex"), true);
}
}

}


{


gdjs.evtsExt__SelectionTools__Select.userFunc0x1c9faf8(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("PopVertex"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices"), gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertices")) - 1);
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("PopVertex"), false);
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


};gdjs.evtsExt__SelectionTools__Select.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Rectangular";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Vertex")) == 4;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__Select.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("VertexCount")) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Lasso";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("SelectionType")) == "Polygonal";
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
{isConditionTrue_3 = !!eventsFunctionContext.getArgument("PreSelect");
}
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("CloseSelection"), true);
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__Select.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SelectionTools__Select.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__SelectionTools").getChild("Active"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = !!eventsFunctionContext.getArgument("PreSelect");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SelectionTools__Select.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SelectionTools__Select.func = function(runtimeScene, Targets, InvertSelection, PreSelect, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Targets": Targets
},
  _objectArraysMap: {
"Targets": gdjs.objectsListsToArray(Targets)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SelectionTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SelectionTools"),
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
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
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
if (argName === "InvertSelection") return InvertSelection;
if (argName === "PreSelect") return PreSelect;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects1.length = 0;
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects2.length = 0;
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects3.length = 0;

gdjs.evtsExt__SelectionTools__Select.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects1.length = 0;
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects2.length = 0;
gdjs.evtsExt__SelectionTools__Select.GDTargetsObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SelectionTools__Select.registeredGdjsCallbacks = [];