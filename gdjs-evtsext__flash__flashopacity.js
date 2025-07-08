
gdjs.evtsExt__Flash__FlashOpacity = gdjs.evtsExt__Flash__FlashOpacity || {};

/**
 * Behavior generated from Flash opacity smothly (fade)
 */
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity = class FlashOpacity extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Opacity = behaviorData.Opacity !== undefined ? behaviorData.Opacity : "";
    this._behaviorData.TweenBehavior = behaviorData.TweenBehavior !== undefined ? behaviorData.TweenBehavior : "";
    this._behaviorData.HalfPeriodTime = behaviorData.HalfPeriodTime !== undefined ? behaviorData.HalfPeriodTime : Number("0.1") || 0;
    this._behaviorData.IsFlashing = false;
    this._behaviorData.FlashDuration = Number("0") || 0;
    this._behaviorData.TargetOpacity = Number("0") || 0;
    this._behaviorData.StartingOpacity = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Opacity !== newBehaviorData.Opacity)
      this._behaviorData.Opacity = newBehaviorData.Opacity;
    if (oldBehaviorData.TweenBehavior !== newBehaviorData.TweenBehavior)
      this._behaviorData.TweenBehavior = newBehaviorData.TweenBehavior;
    if (oldBehaviorData.HalfPeriodTime !== newBehaviorData.HalfPeriodTime)
      this._behaviorData.HalfPeriodTime = newBehaviorData.HalfPeriodTime;
    if (oldBehaviorData.IsFlashing !== newBehaviorData.IsFlashing)
      this._behaviorData.IsFlashing = newBehaviorData.IsFlashing;
    if (oldBehaviorData.FlashDuration !== newBehaviorData.FlashDuration)
      this._behaviorData.FlashDuration = newBehaviorData.FlashDuration;
    if (oldBehaviorData.TargetOpacity !== newBehaviorData.TargetOpacity)
      this._behaviorData.TargetOpacity = newBehaviorData.TargetOpacity;
    if (oldBehaviorData.StartingOpacity !== newBehaviorData.StartingOpacity)
      this._behaviorData.StartingOpacity = newBehaviorData.StartingOpacity;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Opacity: this._behaviorData.Opacity,
    TweenBehavior: this._behaviorData.TweenBehavior,
    HalfPeriodTime: this._behaviorData.HalfPeriodTime,
    IsFlashing: this._behaviorData.IsFlashing,
    FlashDuration: this._behaviorData.FlashDuration,
    TargetOpacity: this._behaviorData.TargetOpacity,
    StartingOpacity: this._behaviorData.StartingOpacity,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Opacity !== undefined)
      this._behaviorData.Opacity = networkSyncData.props.Opacity;
    if (networkSyncData.props.TweenBehavior !== undefined)
      this._behaviorData.TweenBehavior = networkSyncData.props.TweenBehavior;
    if (networkSyncData.props.HalfPeriodTime !== undefined)
      this._behaviorData.HalfPeriodTime = networkSyncData.props.HalfPeriodTime;
    if (networkSyncData.props.IsFlashing !== undefined)
      this._behaviorData.IsFlashing = networkSyncData.props.IsFlashing;
    if (networkSyncData.props.FlashDuration !== undefined)
      this._behaviorData.FlashDuration = networkSyncData.props.FlashDuration;
    if (networkSyncData.props.TargetOpacity !== undefined)
      this._behaviorData.TargetOpacity = networkSyncData.props.TargetOpacity;
    if (networkSyncData.props.StartingOpacity !== undefined)
      this._behaviorData.StartingOpacity = networkSyncData.props.StartingOpacity;
  }

  // Properties:
  
  _getOpacity() {
    return this._behaviorData.Opacity !== undefined ? this._behaviorData.Opacity : "";
  }
  _setOpacity(newValue) {
    this._behaviorData.Opacity = newValue;
  }
  _getTweenBehavior() {
    return this._behaviorData.TweenBehavior !== undefined ? this._behaviorData.TweenBehavior : "";
  }
  _setTweenBehavior(newValue) {
    this._behaviorData.TweenBehavior = newValue;
  }
  _getHalfPeriodTime() {
    return this._behaviorData.HalfPeriodTime !== undefined ? this._behaviorData.HalfPeriodTime : Number("0.1") || 0;
  }
  _setHalfPeriodTime(newValue) {
    this._behaviorData.HalfPeriodTime = newValue;
  }
  _getIsFlashing() {
    return this._behaviorData.IsFlashing !== undefined ? this._behaviorData.IsFlashing : false;
  }
  _setIsFlashing(newValue) {
    this._behaviorData.IsFlashing = newValue;
  }
  _toggleIsFlashing() {
    this._setIsFlashing(!this._getIsFlashing());
  }
  _getFlashDuration() {
    return this._behaviorData.FlashDuration !== undefined ? this._behaviorData.FlashDuration : Number("0") || 0;
  }
  _setFlashDuration(newValue) {
    this._behaviorData.FlashDuration = newValue;
  }
  _getTargetOpacity() {
    return this._behaviorData.TargetOpacity !== undefined ? this._behaviorData.TargetOpacity : Number("0") || 0;
  }
  _setTargetOpacity(newValue) {
    this._behaviorData.TargetOpacity = newValue;
  }
  _getStartingOpacity() {
    return this._behaviorData.StartingOpacity !== undefined ? this._behaviorData.StartingOpacity : Number("") || 0;
  }
  _setStartingOpacity(newValue) {
    this._behaviorData.StartingOpacity = newValue;
  }
}

/**
 * Shared data generated from Flash opacity smothly (fade)
 */
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.SharedData = class FlashOpacitySharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Flash_FlashOpacitySharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Flash_FlashOpacitySharedData = new gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.SharedData(
      initialData
    );
  }
  return instanceContainer._Flash_FlashOpacitySharedData;
}

// Methods:
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).hasFinished("__Flash.ToTargetOpacity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectOpacityTween("__Flash.ToStartingOpacity", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartingOpacity(), "easeInOutCubic", 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime(), false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).removeTween("__Flash.ToTargetOpacity");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).hasFinished("__Flash.ToStartingOpacity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectOpacityTween("__Flash.ToTargetOpacity", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetOpacity(), "easeInOutCubic", 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime(), false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).removeTween("__Flash.ToStartingOpacity");
}
}}

}


};gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Opacity_Duration_Timer") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartingOpacity((( gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).getOpacity()))
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).addObjectOpacityTween("__Flash.ToTargetOpacity", eventsFunctionContext.getArgument("NewTargetOpacity"), "easeInOutCubic", 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime(), false);
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(true)
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Opacity_Duration_Timer");
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFlashDuration(eventsFunctionContext.getArgument("NewFlashDuration"))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetOpacity(eventsFunctionContext.getArgument("NewTargetOpacity"))
}}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.Flash = function(TweenBehavior, NewFlashDuration, NewTargetOpacity, parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
, "TweenBehavior": TweenBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
if (argName === "NewFlashDuration") return NewFlashDuration;
if (argName === "NewTargetOpacity") return NewTargetOpacity;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.FlashContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashing = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.IsFlashingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivate = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(false)
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Color_Duration_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).removeTween("__Flash.ToTargetOpacity");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenBehavior")).removeTween("__Flash.ToStartingOpacity");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartingOpacity());
}
}}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.Stop = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.StopContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime(); }}}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTime = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHalfPeriodTime(eventsFunctionContext.getArgument("Value"))
}}

}


};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTime = function(Value, parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "TweenBehavior": this._getTweenBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Flash::FlashOpacity", gdjs.evtsExt__Flash__FlashOpacity.FlashOpacity);
