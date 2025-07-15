
gdjs.evtsExt__CancellableDraggable__CancellableDraggable = gdjs.evtsExt__CancellableDraggable__CancellableDraggable || {};

/**
 * Behavior generated from Cancellable Draggable object
 */
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable = class CancellableDraggable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.DraggableBehavior = behaviorData.DraggableBehavior !== undefined ? behaviorData.DraggableBehavior : "";
    this._behaviorData.TweenBehavior = behaviorData.TweenBehavior !== undefined ? behaviorData.TweenBehavior : "";
    this._behaviorData.OriginalX = Number("") || 0;
    this._behaviorData.OriginalY = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.DraggableBehavior !== newBehaviorData.DraggableBehavior)
      this._behaviorData.DraggableBehavior = newBehaviorData.DraggableBehavior;
    if (oldBehaviorData.TweenBehavior !== newBehaviorData.TweenBehavior)
      this._behaviorData.TweenBehavior = newBehaviorData.TweenBehavior;
    if (oldBehaviorData.OriginalX !== newBehaviorData.OriginalX)
      this._behaviorData.OriginalX = newBehaviorData.OriginalX;
    if (oldBehaviorData.OriginalY !== newBehaviorData.OriginalY)
      this._behaviorData.OriginalY = newBehaviorData.OriginalY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    DraggableBehavior: this._behaviorData.DraggableBehavior,
    TweenBehavior: this._behaviorData.TweenBehavior,
    OriginalX: this._behaviorData.OriginalX,
    OriginalY: this._behaviorData.OriginalY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.DraggableBehavior !== undefined)
      this._behaviorData.DraggableBehavior = networkSyncData.props.DraggableBehavior;
    if (networkSyncData.props.TweenBehavior !== undefined)
      this._behaviorData.TweenBehavior = networkSyncData.props.TweenBehavior;
    if (networkSyncData.props.OriginalX !== undefined)
      this._behaviorData.OriginalX = networkSyncData.props.OriginalX;
    if (networkSyncData.props.OriginalY !== undefined)
      this._behaviorData.OriginalY = networkSyncData.props.OriginalY;
  }

  // Properties:
  
  _getDraggableBehavior() {
    return this._behaviorData.DraggableBehavior !== undefined ? this._behaviorData.DraggableBehavior : "";
  }
  _setDraggableBehavior(newValue) {
    this._behaviorData.DraggableBehavior = newValue;
  }
  _getTweenBehavior() {
    return this._behaviorData.TweenBehavior !== undefined ? this._behaviorData.TweenBehavior : "";
  }
  _setTweenBehavior(newValue) {
    this._behaviorData.TweenBehavior = newValue;
  }
  _getOriginalX() {
    return this._behaviorData.OriginalX !== undefined ? this._behaviorData.OriginalX : Number("") || 0;
  }
  _setOriginalX(newValue) {
    this._behaviorData.OriginalX = newValue;
  }
  _getOriginalY() {
    return this._behaviorData.OriginalY !== undefined ? this._behaviorData.OriginalY : Number("") || 0;
  }
  _setOriginalY(newValue) {
    this._behaviorData.OriginalY = newValue;
  }
}

/**
 * Shared data generated from Cancellable Draggable object
 */
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.SharedData = class CancellableDraggableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CancellableDraggable_CancellableDraggableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CancellableDraggable_CancellableDraggableSharedData = new gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.SharedData(
      initialData
    );
  }
  return instanceContainer._CancellableDraggable_CancellableDraggableSharedData;
}

// Methods:
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("DraggableBehavior")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(35565156);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginalX((( gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[0].getX()))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginalY((( gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[0].getY()))
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DraggingIsCancelled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("DraggableBehavior"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).removeTween("__CancellableDraggable");
}
}}

}


};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DraggableBehavior": this._getDraggableBehavior()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CancellableDraggable"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CancellableDraggable"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext = {};
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects1= [];
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects2= [];


gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CancelLastDraggingS(eventsFunctionContext.getArgument("Duration") / 1000, eventsFunctionContext.getArgument("Easing"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDragging = function(Duration, Easing, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DraggableBehavior": this._getDraggableBehavior()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CancellableDraggable"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CancellableDraggable"),
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
if (argName === "Duration") return Duration;
if (argName === "Easing") return Easing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext = {};
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1= [];
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects2= [];


gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("DraggableBehavior")).isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1[k] = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectPositionTween2("__CancellableDraggable", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginalX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginalY(), eventsFunctionContext.getArgument("Easing"), eventsFunctionContext.getArgument("Duration"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("DraggableBehavior"), false);
}
}}

}


};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingS = function(Duration, Easing, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DraggableBehavior": this._getDraggableBehavior()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CancellableDraggable"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CancellableDraggable"),
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
if (argName === "Duration") return Duration;
if (argName === "Easing") return Easing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.CancelLastDraggingSContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext = {};
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1= [];
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects2= [];


gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).hasFinished("__CancellableDraggable") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1[k] = gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "DraggableBehavior": this._getDraggableBehavior()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CancellableDraggable"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CancellableDraggable"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.DraggingIsCancelledContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("CancellableDraggable::CancellableDraggable", gdjs.evtsExt__CancellableDraggable__CancellableDraggable.CancellableDraggable);
