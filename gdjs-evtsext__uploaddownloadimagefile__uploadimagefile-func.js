
if (typeof gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile !== "undefined") {
  gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile = {};
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1= [];


gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.userFunc0x1cef758 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
//Create a place to store the images somewhere, because we need to know if the user wants to upload the same image, or a new one.
if (!gdjs._ExtensionUploadedImages) {
  gdjs._ExtensionUploadedImages = new Map();
}

//Save the old proportions.
const oldWidth = objects[0].getWidth();
const oldHeight = objects[0].getHeight();

//Check if want to modify the object size to match the image.
const modifySize = eventsFunctionContext.getArgument("ModifySize");

//Create a image upload element and simulate a click on it.
const inputElement = document.createElement('input');
inputElement.type = "file";
inputElement.accept = "image/*"
inputElement.addEventListener("change", handleFiles, false);
inputElement.click();

//Handle the image upload.
async function handleFiles() {
  const files = this.files;
  
  if (!files.length) {} else {
    // Create a FileReader object to read the file as a data URL.
    const reader = new FileReader();
    reader.onload = async function(e) {
      // Get the base64 string from the data URL, and store it in a scene variable if intended.
      const base64 = e.target.result;
      if (eventsFunctionContext.getArgument("StoreBase")) {
        eventsFunctionContext.getArgument("StoreBase").setString(base64)
      }

      // Create a PIXI texture from the base64 string if one doesn't exist yet.
      if (!gdjs._ExtensionUploadedImages.has(base64)) {
        let newTexture = PIXI.Texture.from(base64);
        // Use a callback function that runs after the image is loaded, to ensure that it is properly stored.
        newTexture.on("update", function() {
          gdjs._ExtensionUploadedImages.set(base64,[newTexture,newTexture.width,newTexture.height]);
          //Change the object image, and optionally its proportions.
          const savedTexture = gdjs._ExtensionUploadedImages.get(base64);
          objects[0].getRendererObject().texture.baseTexture = newTexture;

          if (modifySize == true) {
            objects[0].setWidth(newTexture.orig.width);
            objects[0].setHeight(newTexture.orig.height);
          }
      
          if (modifySize == false) {
            objects[0].setWidth(oldWidth);
            objects[0].setHeight(oldHeight);
          }

          //Store the proportions in scene variables if intended.
          if (eventsFunctionContext.getArgument("ImageWidth")) {
            eventsFunctionContext.getArgument("ImageWidth").setNumber(newTexture.width);
          }

          if (eventsFunctionContext.getArgument("ImageHeight")) {
            eventsFunctionContext.getArgument("ImageHeight").setNumber(newTexture.height);
          }
        });
      } else {
        //Change the object image, and optionally its proportions.
        const savedTexture = gdjs._ExtensionUploadedImages.get(base64);
        objects[0].getRendererObject().texture.baseTexture = savedTexture[0];
    
        if (modifySize == true) {
          objects[0].setWidth(savedTexture[1]);
          objects[0].setHeight(savedTexture[2]);
        }

        if (modifySize == false) {
          objects[0].setWidth(oldWidth);
          objects[0].setHeight(oldHeight);
        }

        //Store the proportions in scene variables if intended.
        if (eventsFunctionContext.getArgument("ImageWidth")) {
          eventsFunctionContext.getArgument("ImageWidth").setNumber(savedTexture[1]);
        }

        if (eventsFunctionContext.getArgument("ImageHeight")) {
          eventsFunctionContext.getArgument("ImageHeight").setNumber(savedTexture[2]);
        }
      }
    }
    reader.readAsDataURL(files[0]);
  }
  inputElement.remove();
}
};
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.GDObjectObjects1);
gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.userFunc0x1cef758(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UploadDownloadImageFile__UploadImageFile.func = function(runtimeScene, Object, ModifySize, StoreBase, ImageWidth, ImageHeight, parentEventsFunctionContext) {
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