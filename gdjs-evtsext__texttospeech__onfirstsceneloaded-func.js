
if (typeof gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded = {};


gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.userFunc0x121d750 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// When calling getVoices, browsers return an empty list
// while gathering the real list of available voices.
// This forces to load the voices at the start of the scene.
if (speechSynthesis.onvoiceschanged !== undefined) {
    gdjs._ttsWait = true;
    speechSynthesis.addEventListener("voiceschanged", function listener() {
        gdjs._ttsWait = false;
        speechSynthesis.removeEventListener("voiceschanged", listener);
    });

    // Trigger the loading of the voices
    speechSynthesis.getVoices();
}

};
gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.userFunc0x121d750(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextToSpeech"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextToSpeech"),
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


gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__TextToSpeech__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
