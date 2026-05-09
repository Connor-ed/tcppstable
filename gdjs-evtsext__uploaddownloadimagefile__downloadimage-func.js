
if (typeof gdjs.evtsExt__UploadDownloadImageFile__DownloadImage !== "undefined") {
  gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage = {};
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.idToCallbackMap = new Map();
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1= [];


gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.userFunc0x1126ac8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const rendererObject = objects[0].getRendererObject();
const pixiRenderer = runtimeScene.getGame().getRenderer().getPIXIRenderer();
const canvas = pixiRenderer.extract.canvas(rendererObject);
const dataURL = canvas.toDataURL("image/png");
const a = document.createElement("a");
a.href = dataURL;
a.download = "patch.png";
document.body.appendChild(a);
a.click();
setTimeout(function() { a.remove(); }, 100);
};
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1);

const objects = gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1;
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.userFunc0x1126ac8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.func = function(runtimeScene, Object, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("UploadDownloadImageFile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("UploadDownloadImageFile"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1.length = 0;

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.registeredGdjsCallbacks = [];