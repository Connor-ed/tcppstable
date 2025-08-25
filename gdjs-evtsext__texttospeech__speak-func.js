
if (typeof gdjs.evtsExt__TextToSpeech__Speak !== "undefined") {
  gdjs.evtsExt__TextToSpeech__Speak.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TextToSpeech__Speak = {};


gdjs.evtsExt__TextToSpeech__Speak.userFunc0x26c3900 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;

const message = eventsFunctionContext.getArgument("Message");
const voice = eventsFunctionContext.getArgument("Voice").toLowerCase();
let volume = eventsFunctionContext.getArgument("Volume") / 100;
let rate = eventsFunctionContext.getArgument("Rate") / 100;
let pitch = eventsFunctionContext.getArgument("Pitch") / 100;

// Boundary checks for volume, rate, pitch
if ((volume < 0) || (1 < volume))
    volume = 1;
if ((rate < 0.1) || (10 < rate))
    rate = 1;
if ((pitch < 0) || (2 < pitch))
    pitch = 1;

// Initialize speech settings
const speech = new SpeechSynthesisUtterance();
speech.lang = "en";
speech.text = message;
speech.voice =
    speechSynthesis
        .getVoices()
        .find(({ name }) => name.toLowerCase().includes(voice));
speech.volume = volume;
speech.rate = rate;
speech.pitch = pitch;

if (gdjs._ttsWait && !speech.voice) {
    // The voices are not yet loaded (see onFirstSceneLoaded), let's wait 
    // for them to load before playing the sound for real.
    speechSynthesis.addEventListener("voiceschanged", function listener() {
        // Set the voice anew now that we have all voices
        speech.voice =
            speechSynthesis
                .getVoices()
                .find(({ name }) => name.toLowerCase().includes(voice));
        // Now, the text can finally be spoken.
        speechSynthesis.speak(speech);
        
        speechSynthesis.removeEventListener("voiceschanged", listener);
    });
} else speechSynthesis.speak(speech);

};
gdjs.evtsExt__TextToSpeech__Speak.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextToSpeech__Speak.userFunc0x26c3900(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__TextToSpeech__Speak.func = function(runtimeScene, Message, Voice, Volume, Rate, Pitch, parentEventsFunctionContext) {
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
if (argName === "Message") return Message;
if (argName === "Voice") return Voice;
if (argName === "Volume") return Volume;
if (argName === "Rate") return Rate;
if (argName === "Pitch") return Pitch;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TextToSpeech__Speak.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TextToSpeech__Speak.registeredGdjsCallbacks = [];