
if (typeof gdjs.evtsExt__LoadCustomImage__Action_Image5 !== "undefined") {
  gdjs.evtsExt__LoadCustomImage__Action_Image5.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadCustomImage__Action_Image5 = {};
gdjs.evtsExt__LoadCustomImage__Action_Image5.GDObjectObjects1= [];


gdjs.evtsExt__LoadCustomImage__Action_Image5.userFunc0x176ba50 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Variable = eventsFunctionContext.getArgument("Variable").getAsString();
const customImage = runtimeScene.getVariables().get("__CustomizableImage");
const objects = eventsFunctionContext.getObjects("Object");
const id = eventsFunctionContext.getArgument("ID");

function initializeVariables() {
  customImage.getChild(id).setBoolean(false);

  for (const obj of objects) {
    obj.getVariables().get(id).setBoolean(false);
  }
  setTimeout(loadTexture, 20);
}

function loadTexture() {
  if (Variable && /^data:image\/[a-zA-Z]*;base64,([^\"]*)$/.test(Variable)) {
    const img = new Image();
    img.src = Variable;

    img.onload = function () {
      const texture = new PIXI.Texture(new PIXI.BaseTexture(img));
      
      for (const obj of objects) {
        if (eventsFunctionContext.getArgument("Mode")) {
          obj.getRendererObject().texture.baseTexture = texture;
        } else {
          obj.getRendererObject().texture = texture;
        }
        obj.getVariables().get(id).setBoolean(true);
      }
      customImage.getChild(id).setBoolean(true);
    };

    img.onerror = function () {
      customImage.getChild(id).setBoolean(false);

      for (const obj of objects) {
        obj.getVariables().get(id).setBoolean(false);
      }
    };
  }
}
initializeVariables();
};
gdjs.evtsExt__LoadCustomImage__Action_Image5.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LoadCustomImage__Action_Image5.userFunc0x176ba50(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__LoadCustomImage__Action_Image5.func = function(runtimeScene, Object, ID, Variable, Mode, parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LoadCustomImage"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LoadCustomImage"),
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
if (argName === "ID") return ID;
if (argName === "Variable") return Variable;
if (argName === "Mode") return Mode;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LoadCustomImage__Action_Image5.GDObjectObjects1.length = 0;

gdjs.evtsExt__LoadCustomImage__Action_Image5.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LoadCustomImage__Action_Image5.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__LoadCustomImage__Action_Image5.registeredGdjsCallbacks = [];