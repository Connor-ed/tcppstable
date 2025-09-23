
if (typeof gdjs.evtsExt__ListScroll__MaskObject !== "undefined") {
  gdjs.evtsExt__ListScroll__MaskObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ListScroll__MaskObject = {};
gdjs.evtsExt__ListScroll__MaskObject.GDMaskedObjects1= [];
gdjs.evtsExt__ListScroll__MaskObject.GDMaskObjects1= [];


gdjs.evtsExt__ListScroll__MaskObject.userFunc0x33c0160 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const objectMask = eventsFunctionContext.getObjects("Mask")[0];
if (!objectMask) return;

const objectsMasked = eventsFunctionContext.getObjects("Masked");
for (const objectMasked of objectsMasked) {
    const renderedMasked = objectMasked.getRendererObject(); 
    renderedMasked.mask = objectMask.getRendererObject();
}


};
gdjs.evtsExt__ListScroll__MaskObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


const objects = [];
gdjs.evtsExt__ListScroll__MaskObject.userFunc0x33c0160(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__ListScroll__MaskObject.func = function(runtimeScene, Masked, Mask, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Masked": Masked
, "Mask": Mask
},
  _objectArraysMap: {
"Masked": gdjs.objectsListsToArray(Masked)
, "Mask": gdjs.objectsListsToArray(Mask)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ListScroll"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ListScroll"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ListScroll__MaskObject.GDMaskedObjects1.length = 0;
gdjs.evtsExt__ListScroll__MaskObject.GDMaskObjects1.length = 0;

gdjs.evtsExt__ListScroll__MaskObject.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ListScroll__MaskObject.GDMaskedObjects1.length = 0;
gdjs.evtsExt__ListScroll__MaskObject.GDMaskObjects1.length = 0;


return;
}

gdjs.evtsExt__ListScroll__MaskObject.registeredGdjsCallbacks = [];