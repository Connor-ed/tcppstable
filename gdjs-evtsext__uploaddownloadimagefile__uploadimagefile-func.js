
if (typeof gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile !== "undefined") {
  gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile = {};
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.idToCallbackMap = new Map();
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1= [];


gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.userFunc0x4552a38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs._ExtensionUploadedImages) {
  gdjs._ExtensionUploadedImages = new Map();
}

// Capture everything we need NOW, synchronously, before any async callbacks
const rendererObject = objects[0].getRendererObject();
const oldWidth = objects[0].getWidth();
const oldHeight = objects[0].getHeight();
const modifySize = eventsFunctionContext.getArgument("ModifySize");
const storeBase = eventsFunctionContext.getArgument("StoreBase");
const imageWidthVar = eventsFunctionContext.getArgument("ImageWidth");
const imageHeightVar = eventsFunctionContext.getArgument("ImageHeight");
// Also hold a direct reference to the gdjs object itself for setWidth/setHeight
const gdjsObject = objects[0];

function applyBase64(base64) {
  if (storeBase) { storeBase.setString(base64); }
  if (!gdjs._ExtensionUploadedImages.has(base64)) {
    let newTexture = PIXI.Texture.from(base64);
    if (newTexture.valid) {
      gdjs._ExtensionUploadedImages.set(base64, [newTexture, newTexture.width, newTexture.height]);
      rendererObject.texture = newTexture;
      if (modifySize) { gdjsObject.setWidth(newTexture.orig.width); gdjsObject.setHeight(newTexture.orig.height); }
      else { gdjsObject.setWidth(oldWidth); gdjsObject.setHeight(oldHeight); }
      if (imageWidthVar) imageWidthVar.setNumber(newTexture.width);
      if (imageHeightVar) imageHeightVar.setNumber(newTexture.height);
    } else {
      newTexture.on("update", function() {
        gdjs._ExtensionUploadedImages.set(base64, [newTexture, newTexture.width, newTexture.height]);
        rendererObject.texture = newTexture;
        if (modifySize) { gdjsObject.setWidth(newTexture.orig.width); gdjsObject.setHeight(newTexture.orig.height); }
        else { gdjsObject.setWidth(oldWidth); gdjsObject.setHeight(oldHeight); }
        if (imageWidthVar) imageWidthVar.setNumber(newTexture.width);
        if (imageHeightVar) imageHeightVar.setNumber(newTexture.height);
      });
    }
  } else {
    const saved = gdjs._ExtensionUploadedImages.get(base64);
    rendererObject.texture = saved[0];
    if (modifySize) { gdjsObject.setWidth(saved[1]); gdjsObject.setHeight(saved[2]); }
    else { gdjsObject.setWidth(oldWidth); gdjsObject.setHeight(oldHeight); }
    if (imageWidthVar) imageWidthVar.setNumber(saved[1]);
    if (imageHeightVar) imageHeightVar.setNumber(saved[2]);
  }
}

if (!gdjs._ExtensionFileInput) {
  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = "image/*";
  inp.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;";
  document.body.appendChild(inp);
  gdjs._ExtensionFileInput = inp;
}

const input = gdjs._ExtensionFileInput;
input.value = "";
if (gdjs._ExtensionFileInputListener) {
  input.removeEventListener("change", gdjs._ExtensionFileInputListener);
}
gdjs._ExtensionFileInputListener = function() {
  const files = this.files;
  if (!files || !files.length) return;
  const reader = new FileReader();
  reader.onload = function(e) { applyBase64(e.target.result); };
  reader.onerror = function(e) { console.error("[UploadExt] FileReader error:", e); };
  reader.readAsDataURL(files[0]);
};
input.addEventListener("change", gdjs._ExtensionFileInputListener);
input.click();
};
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1);

const objects = gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1;
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.userFunc0x4552a38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.func = function(runtimeScene, Object, ModifySize, StoreBase, ImageWidth, ImageHeight, parentEventsFunctionContext) {
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
if (argName === "ModifySize") return ModifySize;
if (argName === "StoreBase") return StoreBase;
if (argName === "ImageWidth") return ImageWidth;
if (argName === "ImageHeight") return ImageHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1.length = 0;

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.registeredGdjsCallbacks = [];