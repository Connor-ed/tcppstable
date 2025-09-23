
if (typeof gdjs.evtsExt__FileExplorer__Save !== "undefined") {
  gdjs.evtsExt__FileExplorer__Save.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FileExplorer__Save = {};


gdjs.evtsExt__FileExplorer__Save.userFunc0xc11b48 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Get the content to be saved from the "_saveThis" variable
const contentToSave = runtimeScene.getVariables().get("_saveThis").getAsString(); 

// Get the desired save name from the "_saveName" variable
const saveName = runtimeScene.getVariables().get("_saveName").getAsString(); 

// Create a Blob object from the content
const blob = new Blob([contentToSave], { type: 'text/plain' }); 

// Create a temporary URL for the Blob
const url = window.URL.createObjectURL(blob);

// Create a hidden anchor element to trigger the download
const a = document.createElement('a');
a.style.display = 'none';
a.href = url;
a.download = saveName; // Use the value from the scene variable

// Append the anchor to the document and trigger the download
document.body.appendChild(a);
a.click();

// Clean up the temporary URL
window.URL.revokeObjectURL(url);
};
gdjs.evtsExt__FileExplorer__Save.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_saveThis").setString(eventsFunctionContext.getArgument("Content"));
}
{runtimeScene.getScene().getVariables().get("_saveName").setString(eventsFunctionContext.getArgument("FileName"));
}
}

}


{


gdjs.evtsExt__FileExplorer__Save.userFunc0xc11b48(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FileExplorer__Save.func = function(runtimeScene, Content, FileName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FileExplorer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FileExplorer"),
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
if (argName === "Content") return Content;
if (argName === "FileName") return FileName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FileExplorer__Save.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FileExplorer__Save.registeredGdjsCallbacks = [];