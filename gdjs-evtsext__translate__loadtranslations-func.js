
if (typeof gdjs.evtsExt__Translate__loadTranslations !== "undefined") {
  gdjs.evtsExt__Translate__loadTranslations.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Translate__loadTranslations = {};
gdjs.evtsExt__Translate__loadTranslations.idToCallbackMap = new Map();


gdjs.evtsExt__Translate__loadTranslations.userFunc0x17a2d10 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function loadLanguageFile(filePath) {
    let xhr = new XMLHttpRequest();
    let basePath = runtimeScene.getGame().getVariablesForExtension("Translate").get("translationsPath").getAsString();
    if (basePath === "0") {
        basePath = "";
    }

    xhr.open('GET', basePath+filePath+".json", false);  // false = synchronous
    try {
        xhr.send();
    } catch (error) {
        return false;
    }
    
    
    if (xhr.status === 200) {
        runtimeScene.getGame().getVariablesForExtension("Translate").get("translations").fromJSON(xhr.responseText);
        return true;
    } else {
        return false;
    }
}

let languages = navigator.languages || ['en'];
let fallback = eventsFunctionContext.getArgument("fallback");
let loaded = false;

for (let i=0; i<languages.length; i++) {
    let tryLanguage = languages[i];
    if (!loaded) {
        loaded = loadLanguageFile(tryLanguage);
        if (!loaded && tryLanguage.length > 2) {
            tryLanguage = tryLanguage[0] + tryLanguage[1];
            loaded = loadLanguageFile(tryLanguage);
        }
    } else {
        continue;
    }
}

if (!loaded) {
    loadLanguageFile(fallback);
}
    
};
gdjs.evtsExt__Translate__loadTranslations.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


const objects = [];
gdjs.evtsExt__Translate__loadTranslations.userFunc0x17a2d10(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Translate__loadTranslations.func = function(runtimeScene, fallback, parentEventsFunctionContext) {
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
if (argName === "fallback") return fallback;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Translate__loadTranslations.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Translate__loadTranslations.registeredGdjsCallbacks = [];