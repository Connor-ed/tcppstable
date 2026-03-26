
if (typeof gdjs.evtsExt__RenderToSprite__RenderObject !== "undefined") {
  gdjs.evtsExt__RenderToSprite__RenderObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RenderToSprite__RenderObject = {};
gdjs.evtsExt__RenderToSprite__RenderObject.idToCallbackMap = new Map();
gdjs.evtsExt__RenderToSprite__RenderObject.GDsourceObjects1= [];
gdjs.evtsExt__RenderToSprite__RenderObject.GDrenderTargetObjects1= [];


gdjs.evtsExt__RenderToSprite__RenderObject.userFunc0x15f80f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const source = eventsFunctionContext.getObjects("source")[0].getRendererObject();
const renderTarget = eventsFunctionContext.getObjects("renderTarget")[0].getRendererObject();

// Reset position so that it is not offscreen while rendering
const { x: originalX, y: originalY } = source.position;
const { width, height, x, y } = source.getLocalBounds();
source.position = { x: -x, y: -y };

// Ensure the target is a RenderTexture of the correct size
if (renderTarget.texture instanceof PIXI.RenderTexture) {
    renderTarget.texture.resize(width, height);
} else {
    renderTarget.texture = PIXI.RenderTexture.create({
        width,
        height,
        scaleMode: runtimeScene.getGame().getScaleMode() === "linear"
            ? PIXI.SCALE_MODES.LINEAR
            : PIXI.SCALE_MODES.NEAREST
    });
}

// Render 😎
runtimeScene
    .getGame()
    .getRenderer()
    .getPIXIRenderer()
    .render(source, { renderTexture: renderTarget.texture });

// Restore original position
source.position = { x: originalX, y: originalY };

};
gdjs.evtsExt__RenderToSprite__RenderObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RenderToSprite__RenderObject.userFunc0x15f80f8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__RenderToSprite__RenderObject.func = function(runtimeScene, source, renderTarget, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"source": source
, "renderTarget": renderTarget
},
  _objectArraysMap: {
"source": gdjs.objectsListsToArray(source)
, "renderTarget": gdjs.objectsListsToArray(renderTarget)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RenderToSprite"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RenderToSprite"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RenderToSprite__RenderObject.GDsourceObjects1.length = 0;
gdjs.evtsExt__RenderToSprite__RenderObject.GDrenderTargetObjects1.length = 0;

gdjs.evtsExt__RenderToSprite__RenderObject.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RenderToSprite__RenderObject.GDsourceObjects1.length = 0;
gdjs.evtsExt__RenderToSprite__RenderObject.GDrenderTargetObjects1.length = 0;


return;
}

gdjs.evtsExt__RenderToSprite__RenderObject.registeredGdjsCallbacks = [];