
if (typeof gdjs.evtsExt__ListScroll__InitListScroll !== "undefined") {
  gdjs.evtsExt__ListScroll__InitListScroll.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ListScroll__InitListScroll = {};
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects4= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects4= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects1= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects3= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects4= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects1= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects3= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects4= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects4= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3= [];
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects4= [];


gdjs.evtsExt__ListScroll__InitListScroll.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1, gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].setPosition((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBLeft()),(( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollUpButtonObjects2Objects = Hashtable.newFrom({"ListScrollUpButton": gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2});
gdjs.evtsExt__ListScroll__InitListScroll.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollUpButtonObjects2Objects, (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBLeft()) + (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getWidth()), (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()), "UI");
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollDownButtonObjects2Objects = Hashtable.newFrom({"ListScrollDownButton": gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2});
gdjs.evtsExt__ListScroll__InitListScroll.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollDownButtonObjects2Objects, (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBLeft()) + (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getWidth()), ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()) + (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getHeight())), "UI");
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2[i].setY(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2[i].getY() - ((gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2[i].getHeight())));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollSliderObjects2Objects = Hashtable.newFrom({"ListScrollSlider": gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2});
gdjs.evtsExt__ListScroll__InitListScroll.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollUpButton"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2);
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollSliderObjects2Objects, (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2[0].getPointX("")), (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2[0].getPointY("")), "UI");
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].setY(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].getY() - ((gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].getHeight())));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollBarObjects2Objects = Hashtable.newFrom({"ListScrollBar": gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2});
gdjs.evtsExt__ListScroll__InitListScroll.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollUpButton"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2);
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollBarObjects2Objects, (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBLeft()) + (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getWidth()), (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()), "UI");
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[i].setY(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[i].getY() + ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2[0].getHeight())));
}
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[i].setHeight((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getHeight()) - ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2[0].getHeight()) * 2));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2);
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].returnVariable(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].getVariables().get("__ListScroll__StartX__")).setNumber((gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].getX()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].getHeight() < (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getHeight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1 */
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].setHeight((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getHeight()) * 2);
}
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getAABBTop()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList6(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1);
{runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("__ListScroll__sliderPercentage__").setNumber(0);
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].hide();
}
}

{ //Subevents
gdjs.evtsExt__ListScroll__InitListScroll.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].setX((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].getVariables().get("__ListScroll__StartX__"))));
}
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].setX((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getAABBLeft()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollDownButtonObjects1Objects = Hashtable.newFrom({"ListScrollDownButton": gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects1});
gdjs.evtsExt__ListScroll__InitListScroll.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1 */
{runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[0].getAABBTop()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getAABBTop())) / ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[0].getHeight())));
}
{runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getHeight())) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__")));
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getAABBTop()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__")));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollDownButton"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollDownButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].setY((gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].getY()) + 2 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

{ //Subevents
gdjs.evtsExt__ListScroll__InitListScroll.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollUpButtonObjects1Objects = Hashtable.newFrom({"ListScrollUpButton": gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects1});
gdjs.evtsExt__ListScroll__InitListScroll.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1 */
{runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[0].getAABBTop()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getAABBTop())) / ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[0].getHeight())));
}
{runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getHeight())) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__")));
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getAABBTop()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__")));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollUpButton"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__ListScroll__InitListScroll.mapOfGDgdjs_9546evtsExt_9595_9595ListScroll_9595_9595InitListScroll_9546GDListScrollUpButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].setY((gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].getY()) - 2 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

{ //Subevents
gdjs.evtsExt__ListScroll__InitListScroll.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2, gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3);
gdjs.copyArray(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2, gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3);

/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3 */
{runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[0].getAABBTop()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3[0].getAABBTop())) / ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[0].getHeight())));
}
{runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3[0].getHeight())) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__")));
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3[0].getAABBTop()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__")));
}
}
}

}


{

/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2);
{runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__").setNumber(-((((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[0].getAABBTop()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[0].getAABBTop())) / ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[0].getHeight())))));
}
{runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__").setNumber(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[0].getHeight()) - (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getHeight())) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__scrollRatio__")));
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__contentOffset__")));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2, gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3);

gdjs.copyArray(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2, gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3);

{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3[0].getAABBTop()));
}
}
}

}


{

/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2 */
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].getHeight() > (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getHeight()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ListScroll__InitListScroll.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].getHeight() > (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getHeight())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[k] = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ListScroll__InitListScroll.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);
{runtimeScene.getScene().getVariables().get("__ListScroll__sliderPercentage__").setNumber(Math.min(((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getHeight()) / (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[0].getHeight())) * 100, 100));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].setHeight((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ListScroll__sliderPercentage__")) / 100) * (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getHeight()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[0].getAABBTop()) < (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[0].getAABBTop()));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2[0].getAABBTop()));
}
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2[0].getAABBTop()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollBar"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollSlider"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[0].getAABBBottom()) > (( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getAABBBottom()));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollArea"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("ListScrollMask"), gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1);
/* Reuse gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1[0].getAABBBottom()) - (gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1[i].getHeight()));
}
}
{for(var i = 0, len = gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].setY((( gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1[0].getAABBBottom()) - (gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1[i].getHeight()));
}
}
}

}


};gdjs.evtsExt__ListScroll__InitListScroll.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList11(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList13(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList16(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ListScroll__InitListScroll.eventsList17(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ListScroll__InitListScroll.func = function(runtimeScene, ListScrollArea, Draggable, ListScrollMask, ListScrollUpButton, ListScrollDownButton, ListScrollSlider, Draggable, ListScrollBar, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ListScrollArea": ListScrollArea
, "ListScrollMask": ListScrollMask
, "ListScrollUpButton": ListScrollUpButton
, "ListScrollDownButton": ListScrollDownButton
, "ListScrollSlider": ListScrollSlider
, "ListScrollBar": ListScrollBar
},
  _objectArraysMap: {
"ListScrollArea": gdjs.objectsListsToArray(ListScrollArea)
, "ListScrollMask": gdjs.objectsListsToArray(ListScrollMask)
, "ListScrollUpButton": gdjs.objectsListsToArray(ListScrollUpButton)
, "ListScrollDownButton": gdjs.objectsListsToArray(ListScrollDownButton)
, "ListScrollSlider": gdjs.objectsListsToArray(ListScrollSlider)
, "ListScrollBar": gdjs.objectsListsToArray(ListScrollBar)
},
  _behaviorNamesMap: {
"Draggable": Draggable
, "Draggable": Draggable
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ListScroll"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ListScroll"),
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

gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects4.length = 0;

gdjs.evtsExt__ListScroll__InitListScroll.eventsList18(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollAreaObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollMaskObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollUpButtonObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollDownButtonObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollSliderObjects4.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects1.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects2.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects3.length = 0;
gdjs.evtsExt__ListScroll__InitListScroll.GDListScrollBarObjects4.length = 0;


return;
}

gdjs.evtsExt__ListScroll__InitListScroll.registeredGdjsCallbacks = [];