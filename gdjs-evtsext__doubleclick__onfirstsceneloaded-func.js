
if (typeof gdjs.evtsExt__DoubleClick__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DoubleClick__onFirstSceneLoaded = {};


gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.userFunc0x1ecf3e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
class ClickCounter {
    // Multiple clicks
    multipleClickButton = -1;
    count = 0;

    // Simple click
    lastButton = -1;
    lastPointerId = 0;
    lastTime = 0;
    hasMoved = false;
    simpleClickButton = -1;

    constructor() {
        window.addEventListener(
            'click',
            event => {
                if (event.detail > 1) {
                    this.multipleClickButton = convertHtmlMouseButtonToInputManagerMouseButton(event.button);
                    this.count = event.detail;
                }
            }
        );

        // The 'click' event doesn't do any constraint on the 1st click.
        // It doesn't allow to differenciate a dragging from a click.
        // So, we check it manually.

        window.addEventListener(
            'pointerdown',
            event => {
                this.lastButton = event.button;
                this.lastPointerId = event.pointerId;
                this.lastTime = Date.now();
                this.hasMoved = false;
            }
        );

        window.addEventListener(
            'pointermove',
            event => {
                if (event.pointerId === this.lastPointerId) {
                    this.hasMoved = true;
                }
            }
        );

        window.addEventListener(
            'pointerup',
            (event) => {
                if (event.button === this.lastButton &&
                    event.pointerId === this.lastPointerId &&
                    (!this.hasMoved || Date.now() - this.lastTime < 500)) {
                    this.simpleClickButton = convertHtmlMouseButtonToInputManagerMouseButton(event.button);
                    this.lastButton = -1;
                }
            }
        );

    }

    reset() {
        this.multipleClickButton = -1;
        this.simpleClickButton = -1;
    }

    hasClicked(buttonName, clickCount) {
        const button = gdjs.evtTools.input.mouseButtonsNameToCode[buttonName];
        if (clickCount === 1) {
            return button === this.simpleClickButton;
        }
        else {
            return button === this.multipleClickButton && clickCount === this.count
        }
    }
}

// Converts HTML mouse button to InputManager mouse button.
// This function is used to align HTML button values with GDevelop 3 C++ SFML Mouse button enum values,
// notably the middle and right buttons.
function convertHtmlMouseButtonToInputManagerMouseButton(button) {
    switch (button) {
        case 1: // Middle button
            return gdjs.InputManager.MOUSE_MIDDLE_BUTTON;
        case 2: // Right button
            return gdjs.InputManager.MOUSE_RIGHT_BUTTON;
    }
    return button;
}

gdjs._DoubleClickExtension = { clickCounter: new ClickCounter() };

};
gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.userFunc0x1ecf3e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DoubleClick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DoubleClick"),
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


gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
