
if (typeof gdjs.evtsExt__FileExplorer__Open !== "undefined") {
  gdjs.evtsExt__FileExplorer__Open.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FileExplorer__Open = {};


gdjs.evtsExt__FileExplorer__Open.userFunc0xc9af98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Create a hidden file input element
const fileInput = document.createElement('input');
fileInput.type = 'file';
// Get the file extension from the scene variable
fileInput.accept = runtimeScene.getVariables().get("_openFilter").getAsString(); 
fileInput.style.display = 'none'; // Hide the input element
document.body.appendChild(fileInput);

// Function to handle the selected file
function handleFile(file) {
  // Attempt to get the full path (might be restricted by browser security)
  const filePath = file.path || file.name; // Fallback to file name if path is not available

  console.log("Selected file path:", filePath);
  runtimeScene.getVariables().get("_filePath").setString(filePath);

  // Get file name
  const fileName = file.name;
  console.log("Selected file name:", fileName);
  runtimeScene.getVariables().get("_fileName").setString(fileName); 

  // Get file size (in bytes)
  const fileSize = file.size;
  console.log("Selected file size:", fileSize);
  runtimeScene.getVariables().get("_fileSize").setNumber(fileSize); 

  // Optionally, you can read the file content here if needed
  // ... (similar to the previous solution)
}

// Handle file selection from the file input
fileInput.addEventListener('change', () => {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
      handleFile(selectedFile);
  }
});

// Trigger the file input to open the file explorer
fileInput.click(); // Simulate a click on the hidden file input
};
gdjs.evtsExt__FileExplorer__Open.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_openFilter").setString(eventsFunctionContext.getArgument("Extension"));
}
}

}


{


gdjs.evtsExt__FileExplorer__Open.userFunc0xc9af98(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FileExplorer__Open.func = function(runtimeScene, Extension, parentEventsFunctionContext) {
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
if (argName === "Extension") return Extension;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FileExplorer__Open.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FileExplorer__Open.registeredGdjsCallbacks = [];