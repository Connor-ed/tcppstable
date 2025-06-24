
if (typeof gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection !== "undefined") {
  gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection = {};
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final = [];

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final = [];

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachIndex3 = 0;

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachObjects3 = [];

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachTemporary3 = null;

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachTotalCount3 = 0;

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects1= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects5= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4= [];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects5= [];


gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDSelectionBoxObjects3Objects = Hashtable.newFrom({"SelectionBox": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDSelectionBoxObjects3Objects = Hashtable.newFrom({"SelectionBox": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDSelectionBoxObjects3Objects) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDSelectionBoxObjects3Objects, 0, 0, eventsFunctionContext.getArgument("Layer"));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].areCoordinatesRelative() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].setCoordinatesRelative(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].isClearedBetweenFrames()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].setClearBetweenFrames(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Zorder") != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2);
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].setZOrder(eventsFunctionContext.getArgument("Zorder"));
}
}}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4);

{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[i].getVariables().get("__RTSUnitSelection").getChild("StartX")).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[i].getVariables().get("__RTSUnitSelection").getChild("StartY")).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("AdditiveSelectKey")));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("SubtractiveSelectKey")));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);
{gdjs.evtsExt__RTSUnitSelection__SetSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].setVariableBoolean(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("ClickStarted"), true);
}
}}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects2Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("EndX")).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("EndY")).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MinX")).setNumber(Math.min((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("StartX"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("EndX")))));
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MaxX")).setNumber(Math.max((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("StartX"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("EndX")))));
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MinY")).setNumber(Math.min((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("StartY"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("EndY")))));
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MaxY")).setNumber(Math.max((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("StartY"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("EndY")))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].drawRectangle((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MinX"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MinY"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MaxX"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("RTSUnitSelection").getChild("MaxY"))));
}
}}

}


{



}


{

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3.length = 0;

gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i].getCenterXInScene() < (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[0].getVariables()).get("RTSUnitSelection").getChild("MinX"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i].getCenterXInScene() > (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[0].getVariables()).get("RTSUnitSelection").getChild("MaxX"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i].getCenterYInScene() < (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[0].getVariables()).get("RTSUnitSelection").getChild("MinY"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i].getCenterYInScene() > (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[0].getVariables()).get("RTSUnitSelection").getChild("MaxY"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.indexOf(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]) === -1 )
            gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3_1final, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3);
gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3_1final, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3 */
{gdjs.evtsExt__RTSUnitSelection__SetPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2);
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i].getCenterYInScene() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[0].getVariables()).get("RTSUnitSelection").getChild("MinY"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i].getCenterXInScene() <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[0].getVariables()).get("RTSUnitSelection").getChild("MaxX"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i].getCenterXInScene() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[0].getVariables()).get("RTSUnitSelection").getChild("MinX"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i].getCenterYInScene() <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[0].getVariables()).get("RTSUnitSelection").getChild("MaxY"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2 */
{gdjs.evtsExt__RTSUnitSelection__SetPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects2Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariableBoolean(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("ClickStarted"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(28580508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3 */
{gdjs.evtsExt__RTSUnitSelection__SetPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects3Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[0].getVariables()).get("__RTSUnitSelection").getChild("StartX")));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[0].getVariables()).get("__RTSUnitSelection").getChild("StartY")));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].setVariableBoolean(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3[i].getVariables().get("__RTSUnitSelection").getChild("Dragging"), true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].getVariableBoolean(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].getVariables().get("__RTSUnitSelection").getChild("Dragging"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[k] = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects = Hashtable.newFrom({"Objects": gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4});
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RTSUnitSelection__IsPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RTSUnitSelection__IsSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("AdditiveSelectKey")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4 */
{gdjs.evtsExt__RTSUnitSelection__SetSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RTSUnitSelection__SetPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RTSUnitSelection__IsPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getArgument("SubtractiveSelectKey"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4 */
{gdjs.evtsExt__RTSUnitSelection__SetSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RTSUnitSelection__SetPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RTSUnitSelection__IsPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4 */
{gdjs.evtsExt__RTSUnitSelection__SetSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RTSUnitSelection__SetPreSelected.func(runtimeScene, gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.mapOfGDgdjs_9546evtsExt_9595_9595RTSUnitSelection_9595_9595RTSUnitSelection_9546GDObjectsObjects4Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Objects"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2);

for (gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachIndex3 = 0;gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachIndex3 < gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length;++gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachIndex3) {
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3.length = 0;


gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachTemporary3 = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2[gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachIndex3];
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3.push(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2);
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].setVariableBoolean(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].getVariables().get("__RTSUnitSelection").getChild("Dragging"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].setVariableBoolean(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].getVariables().get("__RTSUnitSelection").getChild("ClickStarted"), false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2);
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].getVariables().get("__RTSUnitSelection").getChild("StartX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2[i].getVariables().get("__RTSUnitSelection").getChild("StartY")).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SelectionBox"), gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1);
{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1[i].getVariables().get("__RTSUnitSelection").getChild("EndX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1[i].returnVariable(gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1[i].getVariables().get("__RTSUnitSelection").getChild("EndY")).setNumber(0);
}
}}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (eventsFunctionContext.getArgument("MouseButtonSelect") == "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (eventsFunctionContext.getArgument("MouseButtonSelect") == "Right");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (eventsFunctionContext.getArgument("MouseButtonSelect") == "Middle");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (eventsFunctionContext.getArgument("MouseButtonSelect") == "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (eventsFunctionContext.getArgument("MouseButtonSelect") == "Right");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Middle");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (eventsFunctionContext.getArgument("MouseButtonSelect") == "Middle");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList6(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList7(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.func = function(runtimeScene, Objects, SelectionBox, Layer, Zorder, AdditiveSelectKey, SubtractiveSelectKey, MouseButtonSelect, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Objects": Objects
, "SelectionBox": SelectionBox
},
  _objectArraysMap: {
"Objects": gdjs.objectsListsToArray(Objects)
, "SelectionBox": gdjs.objectsListsToArray(SelectionBox)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RTSUnitSelection"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RTSUnitSelection"),
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
if (argName === "Layer") return Layer;
if (argName === "Zorder") return Zorder;
if (argName === "AdditiveSelectKey") return AdditiveSelectKey;
if (argName === "SubtractiveSelectKey") return SubtractiveSelectKey;
if (argName === "MouseButtonSelect") return MouseButtonSelect;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects5.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects5.length = 0;

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.eventsList8(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects4.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDObjectsObjects5.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects1.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects2.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects3.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects4.length = 0;
gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.GDSelectionBoxObjects5.length = 0;


return;
}

gdjs.evtsExt__RTSUnitSelection__RTSUnitSelection.registeredGdjsCallbacks = [];