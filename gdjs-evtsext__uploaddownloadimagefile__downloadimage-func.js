
if (typeof gdjs.evtsExt__UploadDownloadImageFile__DownloadImage !== "undefined") {
  gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage = {};
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.idToCallbackMap = new Map();
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1= [];


gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.userFunc0xb729e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const renderer = runtimeScene.getGame().getRenderer().getPIXIRenderer();
const sprite = objects[0].getRendererObject();
const fileName = "test";

renderer.extract.canvas(sprite).toBlob(function(b){
		var a = document.createElement('a');
		document.body.append(a);
		a.download = fileName;
		a.href = URL.createObjectURL(b);
		a.click();
		a.remove();
	}, 'image/png');


};
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1);

const objects = gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1;
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.userFunc0xb729e8(runtimeScene, objects, eventsFunctionContext);

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

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1.length = 0;

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__UploadDownloadImageFile__DownloadImage.registeredGdjsCallbacks = [];