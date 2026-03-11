
if (typeof gdjs.evtsExt__Translate__loadTranslationsResource !== "undefined") {
  gdjs.evtsExt__Translate__loadTranslationsResource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Translate__loadTranslationsResource = {};
gdjs.evtsExt__Translate__loadTranslationsResource.idToCallbackMap = new Map();


gdjs.evtsExt__Translate__loadTranslationsResource.userFunc0xef08f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let jsonFilePath = eventsFunctionContext.getArgument('language_file');

function loadLanguageFile(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false);  // false = synchronous
    xhr.send();
    
    if (xhr.status === 200) {
        return (xhr.responseText);
    } else {
        throw new Error('HTTP error: ' + xhr.status + ' ' + filePath);
    }
}

try {
    let jsonContent = loadLanguageFile(jsonFilePath);
    if (jsonContent) {
        runtimeScene.getGame().getVariablesForExtension("Translate").get("translations").fromJSON(jsonContent);
    } else {
        console.error("Could not load " + jsonFilePath);
    }
} catch (error) {
    console.error("Error: ", error);
}
};
gdjs.evtsExt__Translate__loadTranslationsResource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


const objects = [];
gdjs.evtsExt__Translate__loadTranslationsResource.userFunc0xef08f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Translate__loadTranslationsResource.func = function(runtimeScene, language_file, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Translate"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Translate"),
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
if (argName === "language_file") return language_file;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Translate__loadTranslationsResource.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Translate__loadTranslationsResource.registeredGdjsCallbacks = [];