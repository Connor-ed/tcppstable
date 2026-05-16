
if (typeof gdjs.evtsExt__RenderToSprite__RenderLayer !== "undefined") {
  gdjs.evtsExt__RenderToSprite__RenderLayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RenderToSprite__RenderLayer = {};
gdjs.evtsExt__RenderToSprite__RenderLayer.idToCallbackMap = new Map();
gdjs.evtsExt__RenderToSprite__RenderLayer.GDrenderTargetObjects1= [];


gdjs.evtsExt__RenderToSprite__RenderLayer.userFunc0x16622f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const source = runtimeScene.getLayer(eventsFunctionContext.getArgument("layer")).getRenderer().getRendererObject();
const height = runtimeScene.getLayer("").getCameraHeight();
const width = runtimeScene.getLayer("").getCameraWidth();
/** @type {gdjs.SpriteRuntimeObject} */
const obj = objects[0];
/** @type {PIXI.Sprite} */
const renderTarget = obj.getRendererObject();

// Prepare for render
runtimeScene._updateLayersPreRender();
runtimeScene._updateObjectsPreRender();

// Ensure the target is a RenderTexture of the correct size
gdjs._renderToSprite.rt.resize(width, height)
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

// Prerender to a temporary texture to prevent WebGL erroring out.
// See https://www.html5gamedevs.com/topic/45423-why-is-this-not-allowed/
runtimeScene
    .getGame()
    .getRenderer()
    .getPIXIRenderer()
    .render(source, { renderTexture: gdjs._renderToSprite.rt });

// Actually render 😎
runtimeScene
    .getGame()
    .getRenderer()
    .getPIXIRenderer()
    .render(gdjs._renderToSprite.sprite, { renderTexture: renderTarget.texture });

// Ensure the original width/heigth is restored
renderTarget.width = obj.getWidth();
renderTarget.height = obj.getHeight();

};
gdjs.evtsExt__RenderToSprite__RenderLayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("renderTarget"), gdjs.evtsExt__RenderToSprite__RenderLayer.GDrenderTargetObjects1);

const objects = gdjs.evtsExt__RenderToSprite__RenderLayer.GDrenderTargetObjects1;
gdjs.evtsExt__RenderToSprite__RenderLayer.userFunc0x16622f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__RenderToSprite__RenderLayer.func = function(runtimeScene, layer, renderTarget, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"renderTarget": renderTarget
},
  _objectArraysMap: {
"renderTarget": gdjs.objectsListsToArray(renderTarget)
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
if (argName === "layer") return layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RenderToSprite__RenderLayer.GDrenderTargetObjects1.length = 0;

gdjs.evtsExt__RenderToSprite__RenderLayer.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RenderToSprite__RenderLayer.GDrenderTargetObjects1.length = 0;


return;
}

gdjs.evtsExt__RenderToSprite__RenderLayer.registeredGdjsCallbacks = [];