
if (typeof gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image !== "undefined") {
  gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image = {};
gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.GDObjectObjects1= [];


gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.userFunc0x235d968 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
//Create a place to store the images somewhere, because we need to know if the user wants to upload the same image, or a new one.
if (!gdjs._ExtensionUploadedImages) {
  gdjs._ExtensionUploadedImages = new Map();
}

//Store old width and height of object.
const oldWidth = objects[0].getWidth();
const oldHeight = objects[0].getHeight();

//Check if want to modify the object size to match the image.
const modifySize = eventsFunctionContext.getArgument("ModifySize");

// Get the base64 string.
const base64 = eventsFunctionContext.getArgument("Base64");

// Create a function that returns a promise that resolves when the image is loaded
function loadImage(base64) {
  return new Promise((resolve, reject) => {
    // Create a PIXI texture from the base64 string if one doesn't exist.
    if (!gdjs._ExtensionUploadedImages.has(base64)) {
      let newTexture = PIXI.Texture.from(base64);
      // Create an image object from the texture
      let image = new Image();
      // Set the image source to the texture baseTexture
      image.src = newTexture.baseTexture.resource.url;
      // Use the onload event to resolve the promise
      image.onload = () => {
        // Save the texture and its dimensions in the map
        gdjs._ExtensionUploadedImages.set(base64,[newTexture,image.width,image.height]);
        // Resolve the promise with the texture
        resolve(newTexture);
      };
      // Use the onerror event to reject the promise
      image.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    } else {
      // Resolve the promise with the existing texture
      resolve(gdjs._ExtensionUploadedImages.get(base64)[0]);
    }
  });
}

// Call the loadImage function and use the then and catch methods to handle the promise
loadImage(base64).then((newTexture) => {

  objects[0].getRendererObject().texture.baseTexture = newTexture;
  
  //Change the object image, and optionally its proportions.
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

}).catch((error) => {
  // Handle the error
  console.error(error);
});

};
gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.GDObjectObjects1);
gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.userFunc0x235d968(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.func = function(runtimeScene, Object, ModifySize, Base64, ImageWidth, ImageHeight, parentEventsFunctionContext) {
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
if (argName === "Base64") return Base64;
if (argName === "ImageWidth") return ImageWidth;
if (argName === "ImageHeight") return ImageHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.GDObjectObjects1.length = 0;

gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__UploadDownloadImageFile__LoadBase64Image.registeredGdjsCallbacks = [];