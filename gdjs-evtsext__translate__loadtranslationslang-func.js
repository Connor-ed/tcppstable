
if (typeof gdjs.evtsExt__Translate__loadTranslationsLang !== "undefined") {
  gdjs.evtsExt__Translate__loadTranslationsLang.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Translate__loadTranslationsLang = {};
gdjs.evtsExt__Translate__loadTranslationsLang.idToCallbackMap = new Map();


gdjs.evtsExt__Translate__loadTranslationsLang.userFunc0x17f9990 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let language = eventsFunctionContext.getArgument('language');

function loadLanguageFile(filePath) {
    let xhr = new XMLHttpRequest();
    let basePath = runtimeScene.getGame().getVariablesForExtension("Translate").get("translationsPath").getAsString();
    if (basePath === "0") {
        basePath = "";
    }

    xhr.open('GET', basePath+filePath, false);  // false = synchronous
    xhr.send();
    
    if (xhr.status === 200) {
        runtimeScene.getGame().getVariablesForExtension("Translate").get("translations").fromJSON(xhr.responseText);
        return true;
    } else {
        throw new Error('HTTP error: ' + xhr.status + ' ' + basePath+filePath);
    }
}

try {
    loadLanguageFile(language+".json");
} catch (error) {
    try {
        language = language[0] + language[1];
        loadLanguageFile(language+".json");
    } catch (error) {       
        console.error("Error: "+error);
    }
}
    
};
gdjs.evtsExt__Translate__loadTranslationsLang.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


const objects = [];
gdjs.evtsExt__Translate__loadTranslationsLang.userFunc0x17f9990(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Translate__loadTranslationsLang.func = function(runtimeScene, language, parentEventsFunctionContext) {
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
if (argName === "language") return language;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Translate__loadTranslationsLang.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Translate__loadTranslationsLang.registeredGdjsCallbacks = [];