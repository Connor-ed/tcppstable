
if (typeof gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder !== "undefined") {
  gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder = {};
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1= [];
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects2= [];
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects3= [];


gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.mapOfEmptyGDShapePainterObjects = Hashtable.newFrom({"ShapePainter": []});
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.mapOfGDgdjs_9546evtsExt_9595_9595EdgeScrollCamera_9595_9595DrawEdgeScrollingBorder_9546GDShapePainterObjects2Objects = Hashtable.newFrom({"ShapePainter": gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects2});
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.mapOfEmptyGDShapePainterObjects) < 1;
if (isConditionTrue_0) {
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.mapOfGDgdjs_9546evtsExt_9595_9595EdgeScrollCamera_9595_9595DrawEdgeScrollingBorder_9546GDShapePainterObjects2Objects, 0, 0, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].setFillOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].setCoordinatesRelative(false);
}
}{for(var i = 0, len = gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].setClearBetweenFrames(true);
}
}{for(var i = 0, len = gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].drawRectangle(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].getLayer()), 0) + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].getLayer()), 0) + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].getLayer()), 0) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1[i].getLayer()), 0) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber());
}
}}

}


};gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.func = function(runtimeScene, ShapePainter, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ShapePainter": ShapePainter
},
  _objectArraysMap: {
"ShapePainter": gdjs.objectsListsToArray(ShapePainter)
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

gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects2.length = 0;
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects3.length = 0;

gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects2.length = 0;
gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.GDShapePainterObjects3.length = 0;


return;
}

gdjs.evtsExt__EdgeScrollCamera__DrawEdgeScrollingBorder.registeredGdjsCallbacks = [];